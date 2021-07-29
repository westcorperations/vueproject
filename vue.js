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
    
    
    ],
    ProductCard:[
      {image:'product1.jpg',title:'Our classic senator design',priceRange:'$50-$100'},
      {image:'product2.png',title:'classic Ankara designs',priceRange:'$50-$100'},
       {image:'product3.jpg',title:'classic international wears',priceRange:'$100-$300'},
        {image:'product6.jpg',title:'Fashion Training for aspirants',priceRange:'Affordable'},
        
        ],
        
       AboutUs:[
       {image:'truck.svg',title:'Fast Delivery'},
       {image:'dollar-sign.svg',title:'Very Affordable'},
       
         
         ]
    }}, 
    
methods: {
    active(link) {
     link.isActive = !link.isActive
   
     
}
}
  
}
 Vue.createApp(App).mount( '#app ' )