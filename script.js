function loco()
{gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());    
    ScrollTrigger.refresh();
    

}
loco()
function loadinganimation()
{
    var tl =  gsap.timeline()
tl.from(".page1",
{
    opacity:0
})
tl.from(".page1",
{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"50px",
    duration:2,
    ease:"expo.out"    
})
tl.from(".navbar",
{
    opacity:0
})
tl.from(".page1 h1 , .page1 p ",
{
    opacity:0,
    duration:0.5,
    stagger:0.2
})
tl.from(".page1 #page-something h4 ,.page1 .moving-div",
{
    opacity:0
})
}

loadinganimation()

function navanimation() {
    document.querySelector(".navbar").addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to('.nav-bottom',
            {
                height: '22vh'
            })
        tl.to("nav h5",
            {
                display: 'block'
            })
        tl.to(".navpart2 h5 span",
            {
                y: 0,
                stagger: {
                    amount: 0.7
                },
            })
    })
    document.querySelector(".navbar").addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".navpart2 h5 span",
            {
                y: 20,
                stagger: {
                    amount: 0.7
                },
            })
        tl.to(".navpart2 h5",
            {
                display: 'none'
            })
        tl.to(".nav-bottom",
            {
                height: 0,
                duration: 0.2
            })
    })
}
navanimation()

function page2animation() {
    var rightelem = document.querySelectorAll(".right-elem")

    rightelem.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            gsap.to(elem.childNodes[3],
                {
                    opacity: 1,
                    scale: 1
                })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3],
                {
                    opacity: 0,
                    scale: 0
                })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3],
                {
                    x: dets.x - elem.getBoundingClientRect().x - 50,
                    y: dets.y - elem.getBoundingClientRect().y - 50
                })
        })

    })

}
page2animation()

function page3animation() {
    var page3content = document.querySelector(".page3content")
    var video = document.querySelector(".video")
    page3content.addEventListener("click", function () {
        video.play()
        gsap.to(video,
            {
                transform: "scaleX(1) scaleY(1)",
                opacity: 1,
                borderRadius: 1,
                ease: Power4,
                zIndex: '999999'
            })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video,
            {
                transform: 'sacleX(0.6) scaleY(0)',
                opacity: 0,
                borderRadius: '12px',
                zIndex: '-999999'


            })
    })
}
page3animation()

function page4animation() {
    let sectionright = document.querySelector(".section-right")
    sectionright.addEventListener("mousemove", (dets) => {
        gsap.to(".cursor1",
            {
                x: dets.x - sectionright.getBoundingClientRect().x - 50,
                y: dets.y - sectionright.getBoundingClientRect().y - 90
            })

    })




    sectionright.addEventListener("mouseenter", (dets) => {
        document.querySelector(".video").play()
        gsap.to(".cursor1",
            {
                scale: 1,

            })
        gsap.to(".pikaAi",
            {
                rotate: '50deg',
                scale: 1.5,
                ease: Power4.inOut,

            })
        gsap.to(".pikaAi",
            {
                duration: 2,
                opacity: 0,
            })
    })
    sectionright.addEventListener("mouseleave", (dets) => {
        gsap.to(".cursor1",
            {
                scale: 0
            })
        document.querySelector(".video").pause()

        gsap.to(".pikaAi",
            {
                rotate: '0deg',
                scale: 1,
                ease: Power4,
                duration: .7,
                opacity: 1,
            })
    })


    let sectionright2 = document.querySelector(".section-right2")
    sectionright2.addEventListener("mousemove", (dets) => {
        gsap.to(".cursor2",
            {
                x: dets.x - sectionright2.getBoundingClientRect().x - 50,
                y: dets.y - sectionright2.getBoundingClientRect().y - 100
            })
    })
    sectionright2.addEventListener("mouseenter", (dets) => {
        document.querySelector(".video2").play()
        gsap.to(".cursor2",
            {
                scale: 1,

            })
        gsap.to(".nodo",
            {
                opacity: 0,
                duration: 2,
            })

    })
    sectionright2.addEventListener("mouseleave", (dets) => {
        document.querySelector(".video2").pause()
        gsap.to(".cursor2",
            {
                scale: 0
            })
        gsap.to(".nodo",
            {
                opacity: 1,
                duration: 2,
            })

    })


    var lefthover = document.querySelector("#section-right .left").addEventListener("mouseenter", () => {
        document.querySelector(".hovervideo1 video").play()
        gsap.to(".hovervideo1",
            {
                height: '80%'
            })

        gsap.to("#left",
            {
                borderTopWidth: '3px',
                borderColor: "black"
            })

    })
    var righthover = document.querySelector("#section-right .right").addEventListener("mouseenter", () => {
        document.querySelector(".hovervideo2 video").play()
        gsap.to(".hovervideo2",
            {
                height: '80%'
            })
        gsap.to('#right',
            {
                borderTopWidth: '3px',
                borderColor: "black"

            })

    })

    var lefthover = document.querySelector("#section-right .left").addEventListener("mouseleave", () => {
        document.querySelector(".hovervideo1 video").pause()
        gsap.to(".hovervideo1",
            {
                height: '50%'
            })
        gsap.to("#left",
            {
                borderTopWidth: '1.8px',
                borderColor: "#dadada"

            })
    })
    var righthover = document.querySelector("#section-right .right").addEventListener("mouseleave", () => {
        document.querySelector(".hovervideo2 video").pause()
        gsap.to(".hovervideo2",
            {
                height: '50%'
            })
        gsap.to("#right",
            {
                borderTopWidth: '1.8px',
                borderColor: "#dadada"

            })
    })












}

page4animation()

function page5animation() {
    var closeOpen = document.querySelectorAll(".product")
    closeOpen.forEach((elem) =>
    {  
        var flag = 0
       elem.addEventListener("click",() =>
       {
        if(flag === 0){
        gsap.to("#close",
        {
            opacity:1
        })
        gsap.to("#open",
        {
            opacity:0
        })
        flag = 1
        }
        else
        {
        gsap.to("#close",
        {
            opacity:0
        })
        gsap.to("#open",
        {
            opacity:1
        }) 
        flag = 0  
        }

       }) 
    })
   
}
page5animation()

function page7animation()
{
   gsap.from(".btnslide .box1 .productbtn",
   {
     x:0,
     duration:1,
    
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 0%",
     scrub:4,
    }
   })
   gsap.to(".btnslide .box1 .slide",
   {
    height:'90%',
    duration:1,
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 20%",
     scrub:4,
    }
   })
   gsap.from(".btnslide .box2 .productbtn",
   {
     x:0,
     duration:1,
    
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 0%",
     scrub:4,
    }
   })
   gsap.to(".btnslide .box2 .slide",
   {
    height:'90%',
    duration:1,
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 20%",
     scrub:4,
    }
   })
   gsap.from(".btnslide .box3 .productbtn",
   {
     x:0,
     duration:1,
    
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 0%",
     scrub:4,
    }
   })
   gsap.to(".btnslide .box3 .slide",
   {
    height:'90%',
    duration:1,
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 20%",
     scrub:4,
    }
   })
   gsap.to(".btnslide .box4 .slide",
   {
    height:'90%',
    duration:1,
    scrollTrigger:
    {
     trigger:".btnslide",
     scroller:".main",
     start:"top 80%",
     end:"top 20%",
     scrub:4,
    }
   })
  
}
page7animation()
function page8animation()
{
  var page8 =  document.querySelector(".bigimg")
  page8.addEventListener("mousemove",(det) =>
  {
    gsap.to(".page8curcor",
    {
        x:det.x - page8.getBoundingClientRect().x,
        y:det.y - page8.getBoundingClientRect().y,
    })
  })
  page8.addEventListener("mouseenter",function() 
  { 
   gsap.to('.Arrow',
   {
    opacity:0,
    duration:.5,
   })
   gsap.to('.c-bttn__morph',
   {
    opacity:1,
    duration:.5,
   })
   gsap.to(".page8curcor",
   {
     opacity:1,
     scale:1,
     duration:.5
   })
  
  })
  page8.addEventListener("mouseleave",function() 
  { 
   gsap.to('.Arrow',
   {
    opacity:1,
    duration:.5,

   })
   gsap.to('.c-bttn__morph',
   {
    opacity:0,
    duration:.5,
   })
   gsap.to(".page8curcor",
   {
     opacity:0,
     scale:0,
     duration:.5

   })
  })
}
page8animation()



