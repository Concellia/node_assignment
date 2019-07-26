describe("Should be able to save visitirs data", function(){
    it("should return the full name when asked for a full name", function(){
        let fullname =  new Visitor('Tiyiselani Rhangani',25,'26 July 2019','09:33','it was nice','Concellia')
        expect(fullname.fullname).toBe('Tiyiselani Rhangani')
    })
    it("should return the age when asked for an age", function(){
        let age =  new Visitor('Tiyiselani Rhangani',25,'26 July 2019','09:33','it was nice','Concellia')
        expect(age.age).toBe(25)
    })
    it("should return a date when asked for a date", function(){
        let date =  new Visitor('Tiyiselani Rhangani',25,'26 July 2019','09:33','it was nice','Concellia')
        expect(date.date).toBe('26 July 2019')
    })
    it("should return the time whe asked for a time", function(){
        let time =  new Visitor('Tiyiselani Rhangani',25,'26 July 2019','09:33','it was nice','Concellia')
        expect(time.time).toBe('09:33')
    })
    it("should return the commment when asked for a comment", function(){
        let comment =  new Visitor('Tiyiselani Rhangani',25,'26 July 2019','09:33','it was nice','Concellia')
        expect(comment.comment).toBe('it was nice')
    })
    it("should return a the helper name whe asked for a  name", function(){
        let helper =  new Visitor('Tiyiselani Rhangani',25,'26 July 2019','09:33','it was nice','Concellia')
        expect(helper.helper).toBe('Concellia')
    })
})