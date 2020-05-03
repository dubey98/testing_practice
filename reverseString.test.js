const reverseString = require("./reverseString");

test("reverse a word",()=>{
    expect(reverseString("morty")).toBe("ytrom");
})
test("reverse a string",()=>{
    expect(reverseString("rick and morty")).toBe("ytrom dna kcir");
})
test("reverse a strin :2",()=>{
    expect(reverseString("wubba lubba dub dub")).toBe("bud bud abbul abbuw");
})
test("empty string",()=>{
    expect(reverseString("")).toBe("");
})
test("spaces at back",()=>{
    expect(reverseString("oh yes!!          ")).toBe("          !!sey ho");
})