(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{532:function(s,t,a){"use strict";a.r(t);var i=a(14),l=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"填空"}},[s._v("填空")]),s._v(" "),t("p",[s._v("1、帧中继")]),s._v(" "),t("p",[s._v("2、分布式功能（DCF）子层")]),s._v(" "),t("p",[s._v("3、衰减")]),s._v(" "),t("p",[s._v("4、单播")]),s._v(" "),t("p",[s._v("5、1.544Mb/s  = 1544000 bit/s")]),s._v(" "),t("p",[s._v("6、s+1")]),s._v(" "),t("p",[s._v("7、2^m – 1\t2^(m-1)")]),s._v(" "),t("p",[s._v("8、16\t1")]),s._v(" "),t("p",[s._v("9、28")]),s._v(" "),t("p",[s._v("10、0:A015::1:12:1213")]),s._v(" "),t("p",[s._v("11、IP\tping")]),s._v(" "),t("p",[s._v("12、ip地址")]),s._v(" "),t("p",[s._v("13、全双工")]),s._v(" "),t("p",[s._v("14、语法")]),s._v(" "),t("p",[s._v("15、SMTP")]),s._v(" "),t("p",[s._v("16、NULL")]),s._v(" "),t("p",[s._v("17、点对点\t端对端")]),s._v(" "),t("p",[s._v("18、min{拥塞窗口，接收窗口}")]),s._v(" "),t("h2",{attrs:{id:"单选"}},[s._v("单选")]),s._v(" "),t("p",[s._v("1-5 BBACA")]),s._v(" "),t("p",[s._v("6-10 DCADB")]),s._v(" "),t("p",[s._v("11-15 CBDBA")]),s._v(" "),t("p",[s._v("16-19 CDDC")]),s._v(" "),t("h2",{attrs:{id:"简答"}},[s._v("简答")]),s._v(" "),t("h3",{attrs:{id:"_1"}},[s._v("1")]),s._v(" "),t("p",[s._v("存在着三级寻址，分别是链路层的mac寻址，互联网ip寻址，还有传输层的端口寻址")]),s._v(" "),t("p",[s._v("多层寻址是因为网络是由多个物理网络互联而成的互联网，在不同的网络中有不同的寻址方法，数据链路层是在物理网络中的寻址，物理寻址仅是负责处理本地网络寻址的问题；互联网是互联起来的逻辑网络中的寻址，逻辑寻址处理需要通过网络边界的寻址问题；IP地址只能寻址到主机，要寻址到具体的应用进程还需要端口号，端口寻址负责处理将报文传送给计算机上的指定进程。")]),s._v(" "),t("h3",{attrs:{id:"_2"}},[s._v("2")]),s._v(" "),t("p",[s._v("数据链路层、网络层和传输层都存在着流量控制")]),s._v(" "),t("p",[s._v("数据链路层的流量控制采用信贷滑窗协议进行流控，即停止等待ARQ、回退N帧ARQ和选择重传ARQ；网络层主要通过icmp协议进行流控；而传输层则是在确认报文中添加了一个接收窗口大小的字段来限制发送方的流量")]),s._v(" "),t("p",[s._v("在多个层进行流量控制的原因是因为OSI之间的数据传输，可以看作是在对等实体之间进行的，每一层的对等实体都相对独立，即链路层的流控要求与网络层和传输层的流控要求并不相同，故需要多层流量控制")]),s._v(" "),t("h3",{attrs:{id:"_3"}},[s._v("3")]),s._v(" "),t("p",[s._v("慢启动：（指数增加）客户端向服务器端发送一个MSS，然后收到确认之后，再发送2个MSS，每收到一个MSS的确认，下次传输数据便增加一个MSS，若发送窗口达到阈值时，则进入拥塞避免阶段")]),s._v(" "),t("p",[s._v("拥塞避免：（加性增加）此时为了避免拥塞发生，必须降低拥塞窗口指数增长的速度，在这个算法中，每次整个窗口中的所有段被确认后（一次传输），拥塞窗口和阈值均+1；若发生了网络拥塞，此时进入拥塞检测阶段")]),s._v(" "),t("h3",{attrs:{id:"_4"}},[s._v("4")]),s._v(" "),t("p",[s._v("主要采取了四种安全机制")]),s._v(" "),t("ul",[t("li",[s._v("电子邮件服务器部署SSL证书确保用户度 Web 登录邮箱时的邮件信息安全")]),s._v(" "),t("li",[s._v("使用客户端证书用于 Web 方式登录的强身份认证，替代不安全的用户名和密码方式认证")]),s._v(" "),t("li",[s._v("邮件回接收服务器(POP3/IMAP) 和发送服务器(SMTP) 部署SSL证书，确保链路加密")]),s._v(" "),t("li",[s._v("使用客户端证书实现 Web 方式 或/和 电子邮件客户端软件方式的电子邮件答加密和数字签名")])]),s._v(" "),t("p",[s._v("SSL（安全套接层）安全机制是依靠数字证书来实现的。用户与IIS服务器建立连接后，服务器会把数字证书与公用密钥发送给用户，用户端生成会话密钥，并用公共密钥对会话密钥进行加密，然后传递给服务器，服务器端用私人密钥进行解密，这样，用户端和服务器端就建立了一条安全通道，只有SSL允许的用户才能与IIS服务器进行通信")]),s._v(" "),t("h3",{attrs:{id:"_5"}},[s._v("5")]),s._v(" "),t("p",[s._v("递归查询和迭代查询")]),s._v(" "),t("p",[s._v("递归查询：本地域名服务器只需向跟服务器查询一次，后面几次查询都递归的在其他几个域名服务器之间进行，并最终由本地域名服务器返回给主机")]),s._v(" "),t("p",[s._v("迭代查询：本地域名服务器向各级域名服务器进行查询，各级域名服务器要么给出所查询 IP，要么指定下一步应该查询那个服务器，最后将 IP 地址返回给主机")]),s._v(" "),t("h2",{attrs:{id:"计算"}},[s._v("计算")]),s._v(" "),t("h3",{attrs:{id:"_1-2"}},[s._v("1")]),s._v(" "),t("p",[s._v("根据奈氏定理\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("msub",[t("mi",[s._v("C")]),t("mn",[s._v("1")])],1),t("mo",[s._v("=")]),t("mn",[s._v("2")]),t("mo",[s._v("×")]),t("mi",[s._v("W")]),t("mo",[s._v("×")]),t("mi",[s._v("l")]),t("mi",[s._v("o")]),t("msub",[t("mi",[s._v("g")]),t("mn",[s._v("2")])],1),t("mn",[s._v("8")]),t("mo",[s._v("=")]),t("mn",[s._v("2")]),t("mo",[s._v("∗")]),t("mn",[s._v("3000")]),t("mo",[s._v("∗")]),t("mn",[s._v("3")]),t("mo",[s._v("=")]),t("mn",[s._v("18000")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("b")]),t("mi",[s._v("i")]),t("mi",[s._v("t")]),t("mi",{attrs:{mathvariant:"normal"}},[s._v("/")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nC_1 = 2\\times W\\times log_28 = 2*3000*3 = 18000(bit/s)\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("1")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7278em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7667em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[s._v("W")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),t("span",{staticClass:"mord mathnormal"},[s._v("o")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mord"},[s._v("8")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("∗")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("3000")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("∗")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("3")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("18000")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("bi")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mord"},[s._v("/")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])])])],1),s._v("\n根据香农定理\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("msub",[t("mi",[s._v("C")]),t("mn",[s._v("2")])],1),t("mo",[s._v("=")]),t("mi",[s._v("W")]),t("mo",[s._v("×")]),t("mi",[s._v("l")]),t("mi",[s._v("o")]),t("msub",[t("mi",[s._v("g")]),t("mn",[s._v("2")])],1),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("1")]),t("mo",[s._v("+")]),t("mfrac",[t("mi",[s._v("S")]),t("mi",[s._v("N")])],1),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("=")]),t("mn",[s._v("3000")]),t("mo",[s._v("∗")]),t("mi",[s._v("l")]),t("mi",[s._v("o")]),t("mi",[s._v("g")]),t("mn",[s._v("2")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("1")]),t("mo",[s._v("+")]),t("mn",[s._v("100")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("=")]),t("mn",[s._v("3000")]),t("mo",[s._v("∗")]),t("mn",[s._v("6.66")]),t("mo",[s._v(">")]),t("mn",[s._v("18000")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nC_2 = W\\times log_2(1+\\frac{S}{N}) = 3000*log2(1+100) =3000*6.66 > 18000\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7667em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[s._v("W")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),t("span",{staticClass:"mord mathnormal"},[s._v("o")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"2.0463em","vertical-align":"-0.686em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mopen nulldelimiter"}),t("span",{staticClass:"mfrac"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.3603em"}},[t("span",{staticStyle:{top:"-2.314em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[s._v("N")])])]),t("span",{staticStyle:{top:"-3.23em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),t("span",{staticStyle:{top:"-3.677em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[t("span")])])])]),t("span",{staticClass:"mclose nulldelimiter"})]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("3000")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("∗")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),t("span",{staticClass:"mord mathnormal"},[s._v("o")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("100")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("3000")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("∗")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6835em","vertical-align":"-0.0391em"}}),t("span",{staticClass:"mord"},[s._v("6.66")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v(">")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("18000")])])])])])])],1),s._v("\n故最大传输速率应为 18000bit/s")]),s._v(" "),t("h3",{attrs:{id:"_2-2"}},[s._v("2")]),s._v(" "),t("p",[s._v("(1)")]),s._v(" "),t("p",[s._v("冲突窗口：以太网数据帧端到端的往返时间")]),s._v(" "),t("p",[s._v("最小帧长：CSMA/CD总线网中的所有数据帧的最小长度")]),s._v(" "),t("p",[s._v("公式：最小帧长 / 传输速率  = 2*总线传播时延")]),s._v(" "),t("p",[s._v("(2)")]),s._v(" "),t("p",[s._v("最短（即为甲乙双方同时发送数据）\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("msub",[t("mi",[s._v("T")]),t("mrow",[t("mi",[s._v("m")]),t("mi",[s._v("i")]),t("mi",[s._v("n")])],1)],1),t("mo",[s._v("=")]),t("mn",[s._v("2")]),t("mi",{attrs:{mathvariant:"normal"}},[s._v("/")]),t("mn",[s._v("200000")]),t("mo",[s._v("=")]),t("mn",[s._v("0.01")]),t("mi",[s._v("m")]),t("mi",[s._v("s")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nT_{min} = 2/200000 = 0.01ms\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("min")])])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("2/200000")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("0.01")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")])])])])])])],1),s._v("\n最长（一方收到另一方发来的数据之后才开始发送数据）\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("msub",[t("mi",[s._v("T")]),t("mrow",[t("mi",[s._v("m")]),t("mi",[s._v("a")]),t("mi",[s._v("x")])],1)],1),t("mo",[s._v("=")]),t("mn",[s._v("2")]),t("msub",[t("mi",[s._v("T")]),t("mrow",[t("mi",[s._v("m")]),t("mi",[s._v("i")]),t("mi",[s._v("n")])],1)],1),t("mo",[s._v("=")]),t("mn",[s._v("0.02")]),t("mi",[s._v("m")]),t("mi",[s._v("s")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nT_{max} = 2T_{min} = 0.02ms\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.1514em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("ma")]),t("span",{staticClass:"mord mathnormal mtight"},[s._v("x")])])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[s._v("T")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("min")])])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("0.02")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")])])])])])])],1),s._v("\n(3)")]),s._v(" "),t("p",[s._v("数据的发送时延"),t("code",[s._v("= 1518*8 bit/（10Mb/s）= 1.2144ms")])]),s._v(" "),t("p",[s._v("确认帧的发送时延"),t("code",[s._v("= 64*8 bit/ (10Mb/s) = 0.0512 ms")])]),s._v(" "),t("p",[s._v("故发送周期"),t("code",[s._v("= 0.0512 + 1.2144 + 0.02 = 1.2856 ms")])]),s._v(" "),t("p",[s._v("则有效数据传输率"),t("code",[s._v("= 1500*8 bit/1.2856ms = 9.33Mb/s")])]),s._v(" "),t("h3",{attrs:{id:"_3-2"}},[s._v("3")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("集合")]),s._v(" "),t("th",[s._v("目标节点")]),s._v(" "),t("th"),s._v(" "),t("th"),s._v(" "),t("th"),s._v(" "),t("th")])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("B")]),s._v(" "),t("td",[s._v("C")]),s._v(" "),t("td",[s._v("D")]),s._v(" "),t("td",[s._v("E")]),s._v(" "),t("td",[s._v("F")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("A")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("∞")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("∞")]),s._v(" "),t("td",[s._v("∞")])]),s._v(" "),t("tr",[t("td",[s._v("A、B")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("∞")])]),s._v(" "),t("tr",[t("td",[s._v("A、B、E")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("3")]),s._v(" "),t("td",[s._v("3")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("6")])]),s._v(" "),t("tr",[t("td",[s._v("A、B、C、D、E")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("3")]),s._v(" "),t("td",[s._v("3")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("5")])]),s._v(" "),t("tr",[t("td",[s._v("A、B、C、D、E、F")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("3")]),s._v(" "),t("td",[s._v("3")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("5")])])])]),s._v(" "),t("p",[s._v("故最小代价通路树为 ABECF")]),s._v(" "),t("h3",{attrs:{id:"_4-2"}},[s._v("4")]),s._v(" "),t("p",[s._v("(1) 40.15.28.0  255.255.128.0")]),s._v(" "),t("p",[s._v("(2) 8个")]),s._v(" "),t("p",[s._v("(3) 255.255.248.0")]),s._v(" "),t("p",[s._v("(4) 255.255.240.0")]),s._v(" "),t("p",[s._v("(5) 第一分部")]),s._v(" "),t("h3",{attrs:{id:"_5-2"}},[s._v("5")]),s._v(" "),t("p",[s._v("(1)")]),s._v(" "),t("p",[s._v("局域网1 ： 255.118.1.0/25")]),s._v(" "),t("p",[s._v("局域网2 ： 255.118.1.128/25")]),s._v(" "),t("p",[s._v("(2)")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("222.118.3.2")]),s._v(" "),t("th",[s._v("255.255.255.255")]),s._v(" "),t("th",[s._v("222.118.2.2")]),s._v(" "),t("th",[s._v("L0")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0.0.0.0")]),s._v(" "),t("td",[s._v("0.0.0.0")]),s._v(" "),t("td",[s._v("222.118.2.2")]),s._v(" "),t("td",[s._v("L0")])])])]),s._v(" "),t("h2",{attrs:{id:"综合"}},[s._v("综合")]),s._v(" "),t("p",[s._v("(1) 64.170.98.32 （40.aa.62.20）\t00-21-27-21-51-ee")]),s._v(" "),t("p",[s._v("(2) ARP协议\tFF-FF-FF-FF-FF-FF")]),s._v(" "),t("p",[s._v("(3) 5+1 = 6个")]),s._v(" "),t("p",[s._v("(4)")]),s._v(" "),t("p",[s._v("TTL、头部校验和、源IP地址")]),s._v(" "),t("p",[s._v("若IP分组的长度超过MTU，则总长度字段、标志字段、片偏移字段也会改变")])])}),[],!1,null,null,null);t.default=l.exports}}]);