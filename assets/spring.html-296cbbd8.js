import{_ as t,r as i,o as s,c as h,a as e,b as n,d as a,e as o}from"./app-20538318.js";const l={},c={href:"https://zhuanlan.zhihu.com/p/156209283",target:"_blank",rel:"noopener noreferrer"},p=o('<h2 id="spring用了什么设计模式" tabindex="-1"><a class="header-anchor" href="#spring用了什么设计模式" aria-hidden="true">#</a> Spring用了什么设计模式</h2><h2 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IOC</h2><p>IOC容器，里面存放着要使用的bean，同时我们还可能需要一些高级功能，比如bean的处理器，事件发布相关的的，所以一个高级的IOC容器中，应该将低级容器抽取出来，依赖于低级容器，而高级IOC容器只需要关心高级功能，同时可以随时更换低级容器。</p><h3 id="ioc容器的初始化步骤" tabindex="-1"><a class="header-anchor" href="#ioc容器的初始化步骤" aria-hidden="true">#</a> IOC容器的初始化步骤</h3>',4),d={href:"https://www.cnblogs.com/tanghaorong/p/13497223.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://zhuanlan.zhihu.com/p/432896291",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/593595408",target:"_blank",rel:"noopener noreferrer"},u={href:"https://zhuanlan.zhihu.com/p/150860904",target:"_blank",rel:"noopener noreferrer"},f=o('<p>在ApplicationContext这些高级容器中，实际上是依赖于底层容器（BeanFactory）做Bean的装载。而高级容器实现了一些拓展功能，例如接口回调，监听器，自动实例化单例，发布事件等。</p><p>所以IOC容器初始化大致分为两个步骤：</p><ol><li>低级容器加载配置文件（从 XML，数据库，Applet），并解析成 BeanDefinition 到低级容器中。</li><li>加载成功后，高级容器启动高级功能，例如接口回调，监听器，自动实例化单例，发布事件等等功能。</li></ol><p>以<code>ClassPathXmlApplicationContext</code>的初始化为例，它会调用<code>AbstractApplicationContext</code>中的<code>refresh</code>方法，这个是IOC容器最核心的代码，包含了上面的两个步骤。</p><p>refresh方法首先通过<code>obtainFreshBeanFactory</code>获取到一个Bean工厂（低级容器），实现了对底层容器的刷新。如果当前已经存在了容器，它会将旧容器删除，重新创建新容器。然后重新执行对Resource的定位，Bean的载入以及注册。然后调用<code>prepareBeanFactory</code>对工厂进行属性填充。</p><p>之后就是一些扩展接口和高级功能，依次包括</p><ul><li><strong>postProcessBeanFactory：SPI</strong></li><li>invokeBeanFactoryPostProcessors：调用工厂后置处理器</li><li>registerBeanPostProcessors：注册bean后置处理器</li><li>initMessageSource：初始化国际化资源</li><li>initApplicationEventMulticaster：初始化事件派发器</li><li><strong>onRefresh</strong>：SPI，可以自定义逻辑，spring boot在这里启动了Tomcat</li><li>registerListeners：注册所有应用监听器，所有实现了ApplicationListener的bean</li><li><strong>finishBeanFactoryInitialization</strong>：初始化所有懒加载的bean</li></ul><h2 id="bean" tabindex="-1"><a class="header-anchor" href="#bean" aria-hidden="true">#</a> bean</h2><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><p>实例化、属性赋值、初始化、销毁</p>',10),b={href:"https://zhuanlan.zhihu.com/p/638361741",target:"_blank",rel:"noopener noreferrer"},m={href:"https://segmentfault.com/a/1190000044064099",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"springboot和spring区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#springboot和spring区别","aria-hidden":"true"},"#"),n(" SpringBoot和Spring区别")],-1),S=e("p",null,"spb是对sp的拓展，首先是消除了XML配置，将常见的依赖进行整合。提供了自动装配机制。将应用服务器内嵌入应用中，只需要打jar包即可运行服务。",-1),x=e("h2",{id:"spring循环依赖",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spring循环依赖","aria-hidden":"true"},"#"),n(" Spring循环依赖")],-1);function C(I,z){const r=i("ExternalLinkIcon");return s(),h("div",null,[e("p",null,[e("a",c,[n("Spring核心原理解析 - 知乎 (zhihu.com)"),a(r)])]),p,e("p",null,[e("a",d,[n("Spring详解（五）——Spring IOC容器的初始化过程 "),a(r)])]),e("p",null,[e("a",_,[n("Spring IOC容器初始化主体流程"),a(r)])]),e("p",null,[e("a",g,[n("面试官：你来说一下Spring IOC容器的创建过程"),a(r)])]),e("p",null,[e("a",u,[n("面试问烂的 Spring IOC 过程"),a(r)])]),f,e("p",null,[e("a",b,[n("带你彻底掌握Bean的生命周期 - 知乎 (zhihu.com)"),a(r)])]),e("p",null,[e("a",m,[n("java - Spring Bean生命周期详解 - Spring注解全面解析 - SegmentFault 思否"),a(r)])]),B,S,x])}const O=t(l,[["render",C],["__file","spring.html.vue"]]);export{O as default};