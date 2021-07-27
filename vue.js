const App = {
    data() {
    return{
    brandName : ' ',
    activeColor: 'text-white',
    links:[
    { name:'Home', href:'#',isActive:true},
    {name:'Blog',href:'#',isActive:false},
    {name:'About',href:'#',isActive:false},
    {name:'Contact',href:'#',isActive:false},
    
    
    ]
    
    }}, 
    
methods: {
    active(link) {
     link.isActive = !link.isActive
   
     
}
}
  
}
 Vue.createApp(App).mount( '#navBar ' )