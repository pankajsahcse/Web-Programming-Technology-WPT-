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

}

export default new CouseService()