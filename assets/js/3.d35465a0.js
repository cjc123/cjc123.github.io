(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(o,n,t){o.exports=t.p+"assets/img/mongodb_qd.a1fa20b7.jpg"},187:function(o,n,t){o.exports=t.p+"assets/img/mongodb_fw.e8ed3bec.jpg"},196:function(o,n,t){"use strict";t.r(n);var a=[function(){var o=this,n=o.$createElement,a=o._self._c||n;return a("div",{staticClass:"content"},[a("p",[o._v("windows 下 MongoDB 安装及配置")]),o._v(" "),a("h2",{attrs:{id:"登录-mongodb-官网下载并安装-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录-mongodb-官网下载并安装-mongodb"}},[o._v("#")]),o._v(" 登录 Mongodb 官网下载并安装 MongoDB")]),o._v(" "),a("p",[o._v("https://www.mongodb.com/download-center/community")]),o._v(" "),a("h2",{attrs:{id:"先创建数据库文件的存放位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先创建数据库文件的存放位置"}},[o._v("#")]),o._v(" 先创建数据库文件的存放位置")]),o._v(" "),a("p",[o._v("在 MongoDB 安装目录下创建 data，在 data 下再创建 db：D:\\mongodb-4.0.9\\data\\db，因为启动 mongodb 服务之前需要必须创建数据库文件的存放文件夹，否则命令不会自动创建，而且不能启动成功。")]),o._v(" "),a("h2",{attrs:{id:"启动-mongodb-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-mongodb-服务"}},[o._v("#")]),o._v(" 启动 MongoDB 服务")]),o._v(" "),a("ol",[a("li",[o._v("打开 cmd 命令行")]),o._v(" "),a("li",[o._v("进入 D:\\mongodb-4.0.9\\bin 目录（注意：先输入 d:进入 d 盘，然后输入 cd D:\\mongodb-4.0.9\\bin）")]),o._v(" "),a("li",[o._v("输入如下的命令启动 mongodb 服务：mongod --dbpath D:\\mongodb-4.0.9\\data\\db")]),o._v(" "),a("li",[o._v("在浏览器输入http://localhost:27017 （27017 是 mongodb 的端口号）查看，若显示："),a("img",{attrs:{src:t(186),alt:"mongodb启动成功",title:"mongodb启动成功"}}),a("br"),o._v("\n则表示，连接成功。如果不成功，可以查看端口是否被占用。")])]),o._v(" "),a("h2",{attrs:{id:"配置本地-windows-mongodb-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置本地-windows-mongodb-服务"}},[o._v("#")]),o._v(" 配置本地 windows mongodb 服务")]),o._v(" "),a("p",[o._v("这样可设置为 开机自启动，可直接手动启动关闭，可通过命令行 net start MongoDB 启动，net stop MongoDB 停止。")]),o._v(" "),a("ol",[a("li",[o._v("在 MongoDB 安装目录下新建配置文件 mongo.config")]),o._v(" "),a("li",[o._v("用记事本打开 mongo.config ，并输入："),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[o._v("dbpath=D:\\mongodb-4.0.9\\data\\db\nlogpath=D:\\mongodb-4.0.9\\data\\log\\mongo.log\n")])])])]),o._v(" "),a("li",[o._v("用管理员身份打开 cmd:在 C:\\Windows\\System32 找到 cmd 的运行文件,右键，选择以管理员身份运行.")]),o._v(" "),a("li",[o._v('配置 windows 服务：cmd 先跳转到 D:\\mongodb-4.0.9\\bin 目录下。\n输入：mongod --config "D:\\mongodb-4.0.9\\mongo.config" --install --serviceName "MongoDB" 即根据刚创建的 mongo.config 配置文件安装服务，名称为 MongoDB。完成后，查看 windows 本地的服务,可以看到名为 MongoDB 的服务,'),a("img",{attrs:{src:t(187),alt:"mongodb服务",title:"mongodb服务"}}),o._v(" 表示配置成功.")])])])}],d=t(0),s=Object(d.a)({},(function(){var o=this.$createElement;this._self._c;return this._m(0)}),a,!1,null,null,null);n.default=s.exports}}]);