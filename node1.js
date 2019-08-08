
 class Visitor{
    constructor(fullname,age,date,time,comment,helper){
        this.fullname = fullname;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comment = comment;
        this.helper = helper;
    }
    
    getId(){
    const FileSet = require('file-set');
       var files = new FileSet('*.JSON');
         let y = files.files.filter((jsonFiles) => {
            return jsonFiles
          });
        return y.length+1
        
    }

    save(){
        var x = this.getId()
        const fs = require('fs')
        let visitor = new Visitor(this.fullname,this.age,this.date,this.time,this.comment,this.helper)
        let data = JSON.stringify(visitor,null,2)
        
        fs.writeFile(`visitor_${x}.JSON`,data,(err)=>{
       if(err){
           console.log('File read failed: ',err)
           
       }
       console.log('Thank you for the data it has been saved')
       return
       
   })
   return `visitor_${x}.JSON`
   }
   load(id){
    const fs = require('fs')
    fs.readFile(`visitor_${id}.JSON`,'utf8',(err,data)=>{
        if(err){
            console.log('File read failed:',err)
            return 
        }
         console.log(data)
    })
 return this.fullname + "'s file"
   }
}

module.exports = Visitor