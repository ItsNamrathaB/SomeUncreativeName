const passMeAnObject = {
    aProperty: {
        aSetting1: 1,
        aSetting2: 2,
        aSetting3: 3,
        aSetting4: 4,
        aSetting5: 5
    },
    bProperty: {
        bSetting1: {
            bPropertySubSetting : true
        },
        bSetting2: "bString"
    },
    cProperty: ["array", "for", "change"]
}


let answer = {}
function printFlattenedKey(obj, keyHitherto){
    for (key in obj) {
        (typeof(obj[key]) === "object" && Object.prototype.toString.call(obj) == '[object Array]') ?
        /* 
        Extended gyan - other ways of checking if object is an array:
        (1) obj instanceof Array;
        (2) Array.isArray(obj); 
        */
        printFlattenedKey(obj[key], keyHitherto+"."+key) : 
        ( answer[keyHitherto+"."+key] = obj[key] )
    }
}

printFlattenedKey(passMeAnObject, "passMeAnObject")

console.log("Yay!!", answer);