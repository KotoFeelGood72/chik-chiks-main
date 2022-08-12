class SlideStories{constructor(t){this.slide=document.querySelector(`[data-slide="${t}"]`),this.active=0,this.init()}activeSlide(t){this.active=t,this.items.forEach((t=>t.classList.remove("active"))),this.items[t].classList.add("active"),this.thumbItems.forEach((t=>t.classList.remove("active"))),this.thumbItems[t].classList.add("active"),this.autoSlide()}prev(){this.active>0?this.activeSlide(this.active-1):this.activeSlide(this.items.length-1)}next(){this.active<this.items.length-1?this.activeSlide(this.active+1):this.activeSlide(0)}addNavigation(){const t=this.slide.querySelector(".slide-next"),i=this.slide.querySelector(".slide-prev");t.addEventListener("click",this.next),i.addEventListener("click",this.prev)}addThumbItems(){this.items.forEach((()=>this.thumb.innerHTML+="<span></span>")),this.thumbItems=Array.from(this.thumb.children)}autoSlide(){clearTimeout(this.timeout),this.timeout=setTimeout(this.next,5e3)}init(){this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.items=this.slide.querySelectorAll(".slide-items"),this.thumb=this.slide.querySelector(".slide-thumb"),this.addThumbItems(),this.activeSlide(0),this.addNavigation()}}