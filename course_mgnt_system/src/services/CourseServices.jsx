class CouseService {
    constructor() {
        this.carr = [{ cid: 1000, cname: 'Java', duration: 100, capacity: 200 },
        { cid: 1001, cname: 'Python', duration: 80, capacity: 250 },
        { cid: 1002, cname: "perl", duration: 78, capacity: 200 }]
    }

    getAllCourses(){
      return  this.carr;
    }

    addCourse(course){
        this.carr.push(course);
    }

    updateCourse(course){
        // First find the product which are exist or not with associated Id
        var pos = this.carr.findIndex((c) => c.cid === course.cid);
        if(pos != -1){
            // Replace the course at pos and 1 data with course data
            this.carr.splice(pos,1,course);
        }
    }

}

export default new CouseService()