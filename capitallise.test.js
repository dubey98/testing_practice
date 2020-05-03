const capitalize = require("./capitallise.js");

test("capitalises the first letter",()=>{
    expect(capitalize("master")).toBe("Master");
});

test("capitalises the first letter of every word",()=>{
    expect(capitalize("master coder")).toBe("Master Coder");
});

test("single letters",()=>{
    expect(capitalize("a master coder")).toBe("A Master Coder");
});

test("empty string",()=>{
    expect(capitalize("")).toBe("");
});