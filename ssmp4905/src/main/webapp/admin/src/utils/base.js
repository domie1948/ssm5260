const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmp4905/",
            name: "ssmp4905",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmp4905/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "在线课堂设计与实现"
        } 
    }
}
export default base
