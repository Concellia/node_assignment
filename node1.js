
class Visitor{
    constructor(fullname,age,date,time,comment,helper){
        this.fullname = fullname;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comment = comment;
        this.helper = helper;
    }
    save(){
        var n = 0
        function increase(){
            n++
            return n
        }
        const fs = require('fs')
        let visitor = new Visitor(this.fullname,this.age,this.date,this.time,this.comment,this.helper)
        let data = JSON.stringify(visitor,null,2)
        
        fs.writeFile(`visitor_${increase()}.json`,data,(err)=>{
       if(err){
           console.log('File read failed: ',err)
           
       }
       console.log('Thank you for the data it has been saved')
       return
       
   })
   
   }
}

