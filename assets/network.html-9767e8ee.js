import{_ as o,r,o as c,c as a,a as e,b as n,d as l}from"./app-20538318.js";const i={},_=e("h2",{id:"tcp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tcp","aria-hidden":"true"},"#"),n(" TCP")],-1),s=e("h3",{id:"三次握手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#三次握手","aria-hidden":"true"},"#"),n(" 三次握手")],-1),E={href:"https://xiaolincoding.com/network/3_tcp/tcp_interview.html#tcp-%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E8%BF%87%E7%A8%8B%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,"从状态和报文的角度来回答：",-1),h=e("ul",null,[e("li",null,[n("客户端主动向服务端发送SYN报文，其中序列号初始化"),e("strong",null,"随机数"),n("，随后客户端由CLOSE进入SYN_SEND状态。")]),e("li",null,"当服务端收到之后，发送SYN+ACK报文，初始化自己的序列号随机数，应答号写入客户端的序列号加一，内核会将连接存储到半连接队列(SYN Queue)（SYN泛洪攻击）。随后由LISTEN进入SYN_RCVD状态。"),e("li",null,"客户端收到后发送ACK报文，应答号为服务端序列号加一，同时可以附加上应用层数据。然后进入ESTABLISHED状态。当服务端收到时，内核将连接从半连接队列(SYN Queue)中取出，添加到全连接队列(Accept Queue)，也进入ESTABLISHED状态。代表着连接已建立。")],-1),u=e("h3",{id:"四次挥手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四次挥手","aria-hidden":"true"},"#"),n(" 四次挥手")],-1),A={href:"https://xiaolincoding.com/network/3_tcp/tcp_interview.html#tcp-%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%E8%BF%87%E7%A8%8B%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"断开连接是双方都可以发起的操作，以客户端断开为例",-1),S=e("ul",null,[e("li",null,"客户端发出FIN报文，随机进入FIN_WAIT_1状态，不再发送数据，但还可以接收数据。"),e("li",null,"服务端收到后首先返回ACK报文，进入CLOSE_WAIT状态，此时还可以发送没有发送完毕的数据。"),e("li",null,"客户端收到后进入FIN_WAIT_2状态，等待服务端的FIN报文"),e("li",null,"服务端返回FIN报文，进入LAST_ACK状态。"),e("li",null,"客户端收到FIN报文，向服务端发送ACK报文，随机进入TIME_WAIT状态（只有主动关闭的一方才有此状态），等待2MSL时间后进入CLOSE状态。"),e("li",null,"当服务端收到ACK响应后，直接进入CLOSE状态。")],-1);function N(B,C){const t=r("ExternalLinkIcon");return c(),a("div",null,[_,s,e("p",null,[e("a",E,[n("tcp-三次握手过程是怎样的"),l(t)])]),d,h,u,e("p",null,[e("a",A,[n("tcp-四次挥手过程是怎样的"),l(t)])]),p,S])}const f=o(i,[["render",N],["__file","network.html.vue"]]);export{f as default};
