const encrypt = require("./ceaserCipher")

test("encrypt by 1 shift",()=>{
    expect(encrypt("attack at dawn",1)).toBe("buubdl bu ebxo");
});
test("wrapping is good",()=>{
    expect(encrypt("wrapping is good",7)).toBe("dyhwwpun pz nvvk");
});
xtest("Capital letters too",()=>{
    expect(encrypt("Capital letters too",5)).toBe("Getmxep pixxivw xss");
});

