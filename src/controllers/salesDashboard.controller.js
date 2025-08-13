const fs = require("fs");
const path = require("path");

const salesData = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/sales.json"), "utf8"));

exports.getStates = async(req, res) => {
    try {
        const states = await [...new Set(salesData.map(item => item.State))];

        return res.status(200).json({
        status: 200,
        message: "States fetched successfully",
        data: states
        });
    } catch (error) {
        return res.status(500).json({
        status: 500,
        message: error.message
        });
    }
} 


exports.getMaxMinDates = (req, res) => {
    try{
        const { state } = req.params;
        const stateOrders = salesData.filter(
            item => item.State.toLowerCase() === state.toLowerCase()
        );

        if (stateOrders.length === 0) {
            return res.status(404).json({ ststus:404, message: "State not found" });
        }

        const dates = stateOrders.map(item => new Date(item["Order Date"]));
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));

        const datesLoop = [
        ...new Set(
            stateOrders.map(item =>
            new Date(item["Order Date"])
                .toISOString()
                .split("T")[0] // get YYYY-MM-DD
            )
        )
        ];

        return res.status(200).json({
            status: 200,
            message: "Max Min date fetched successfully",
            data: {
                minDate: minDate.toISOString().split("T")[0],
                maxDate: maxDate.toISOString().split("T")[0],
                dates : datesLoop
            }
        });
    }catch(error){
        return res.status(500).json({
        status: 500,
        message: "Failed to fetch states max min date",
        });
    }

};

exports.getDashboardData = (req, res) => {
  const { customerId,state, startDate, endDate } = req.body;

  if (!customerId || !startDate || !endDate) {
    return res.status(400).json({
      status:400,
      message: "customerId, state, startDate, and endDate are required"
    });
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const stateReq = state.toLowerCase();

  const filteredData = salesData.filter(item => {
    const orderDate = new Date(item["Order Date"]);
    const stateData = item['State'].toLowerCase();
    return (
      item["Customer ID"] === customerId &&
      orderDate >= start &&
      orderDate <= end &&
      stateData == stateReq
    );
  });

  if (filteredData.length === 0) {
    return res.status(404).json({ status:404, message: "No data found" });
  }

  const totalSales = filteredData.reduce((sum, item) => sum + item.Sales, 0);
  const totalQuantity = filteredData.reduce((sum, item) => sum + item.Quantity, 0);
  const totalProfit = filteredData.reduce((sum, item) => sum + item.Profit, 0);

    return res.status(200).json({
        status: 200,
        message: "successfully",
        data: {
            totalSales: totalSales || 0,
            totalQuantity: totalQuantity || 0,
            totalProfit : totalProfit || 0
        }
    });
};