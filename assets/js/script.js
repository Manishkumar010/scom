gsap.registerPlugin(ScrollTrigger);

 let tl = gsap.timeline();

tl.from(".headerContainer .headerbox header",0.5,{
    y:-30,
    opacity:0,
})

tl.from(".headerContainer .headerbox header ul a",0.5,{
    y:-30,
    opacity:0,
    stagger:0.3
},"same")

tl.from(".headerContainer .headerbox header .logobox",0.5,{
    y:-30,
    opacity:0,
    delay:0.5
},"same")

tl.from(".headerContainer .headerbox h1",0.5,{
    y:-30,
    opacity:0,
})
tl.from(".headerContainer .headerbox p ",0.5,{
    y:-30,
    opacity:0,
})
tl.from(".headerContainer .headerbox div .btn1",0.5,{
    x:-50,
    opacity:0,
},"two")
tl.from(".headerContainer .headerbox div .btn2",0.5,{
    x:50,
    opacity:0,
},"two")

gsap.from(".pages2 .leftbox ",{
    duration:1,
    x:-100,
    opacity:0,
    scrollTrigger: {
        trigger:".pages2 .leftbox ",
        start: "top 60%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages2 .rightbox ",{
    duration:1,
    x:100,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages2 .rightbox",
        start: "top 60%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages2 .rightbox .contentlist span ",{
    duration:1,
    y:30,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages2 .rightbox .contentlist span", 
        start: "top 80%",
        stagger:0.2,
        toggleActions: "play none none reverse",
    }
})
gsap.from(".pages2 .rightbox .viewdetailsbox a:nth-child(2) ",{
    duration:1,
    x:30,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages2 .rightbox .viewdetailsbox a:nth-child(2)", 
        start: "top 90%",
        toggleActions: "play none none reverse",
    }
})

gsap.from(".eventHeadingbox h2 ",{
    duration:0.5,
    y:40,
    opacity:0,
    scrollTrigger: {
        trigger: ".eventHeadingbox h2 ",
        start: "top 88%",
        toggleActions: "play none none reverse",
    }
})
gsap.from(".eventHeadingbox p ",{
    duration:0.5,
    y:40,
    opacity:0,
    scrollTrigger: {
        trigger: ".eventHeadingbox p ",
        start: "top 80%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages3 .cardlistbox #small-cards11",{
    duration:0.5,
    x:-60,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages3 .cardlistbox #small-cards11",
        start: "top 60%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages3 .cardlistbox #small-cards22",{
    duration:0.5,
    y:-70,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages3 .cardlistbox #small-cards22",
        start: "top 50%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages3 .cardlistbox #small-cards33",{
    duration:0.5,
    x:60,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages3 .cardlistbox #small-cards33",
        start: "top 60%",
        toggleActions: "play none none reverse",
        
    }
})

gsap.from(".pages3 .cardlistbox #small-cards",{
    duration:0.5,
    x:-60,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages3 .cardlistbox #small-cards",
        start: "top 60%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages3 .cardlistbox #small-cards2",{
    duration:0.5,
    y:-70,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages3 .cardlistbox #small-cards2",
        start: "top 50%",
        toggleActions: "play none none reverse",
        
    }
})
gsap.from(".pages3 .cardlistbox #small-cards3",{
    duration:0.5,
    x:60,
    opacity:0,
    scrollTrigger: {
        trigger: ".pages3 .cardlistbox #small-cards3",
        start: "top 60%",
        toggleActions: "play none none reverse",
        
    }
})

