const { Net } = require("aa-hook-new-test");

const net = new Net(["7FSSFG2Y5QHQTKVRFB3VWL6UNX3WB36O", "LBJNRHIU2E4BCZ7OLSY2HVI2MTSTPQR4"]);
// You can check events https://testnet.ostable.org/trade/7FSSFG2Y5QHQTKVRFB3VWL6UNX3WB36O/transactions
net.register("bounced", (res) => {
    console.error("bounded, trigger address: ", res.trigger_unit);
}).isBounced();

net.register("change_fee_multiplier", (res) => {
    console.error("change fee_multiplier", res.trigger_unit);
}).payloadContainsKey("value").isSuccess().payloadKeyEqual("name", "fee_multiplier");

net.register("change_interest_rate", (res) => {
    console.error("change_interest_rate", res.trigger_unit);
}).payloadContainsKey("value").isSuccess().payloadKeyEqual("name", "interest_rate");

net.register("close_deposit", (res) => {
    console.error("close deposit", res.trigger_unit);
}).payloadContainsKey("id").isSuccess();


net.register("custom", (res)=> {
    console.error("turnover is 5913340")
}).customHook((res, {payload})=> {
    const turnover = res?.response?.responseVars?.turnover;
    return !!turnover && turnover === 5913340;
}, ['payload'])
