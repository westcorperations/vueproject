const App = {
    data() {
    return{
    brandName : ' ',
    links:[
    { name:'Home', href:'index.html' , active: 'true'} ,
    {name:'Blog'  ,  href:'#' , active: 'false'},
    {name:'About'  ,  href:'#' , active: 'false'},
    {name:'Contact' , href:'#' , active: 'false'},
    
    
    ]
    
    }
    //methods:{
  //  controllink: function (){
   // this.
    
   // }
 // }
    }

}
 Vue.createApp(App).mount( '#navBar ' )