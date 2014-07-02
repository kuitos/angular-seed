### 第一部分  AngularJs 长啥样

#### 简介： AngularJS是建立在这样的信念上的：即声明式编程应该用于构建用户界面以及编写软件构建，而指令式编程非常适合来表示业务逻辑。框架采用并扩展了传统HTML，通过双向的数据绑定来适应动态内容，双向的数据绑定允许模型和视图之间的自动同步。因此，AngularJS使得对DOM的操作不再重要并提升了可测试性。设计目标：

	* 将应用逻辑与对DOM的操作解耦。这会提高代码的可测试性。
	* 将应用程序的测试看的跟应用程序的编写一样重要。代码的构成方式对测试的难度有巨大的影响。
	* 将应用程序的客户端与服务器端解耦。这允许客户端和服务器端的开发可以齐头并进，并且让双方的复用成为可能。
	* 指导开发者完成构建应用程序的整个历程: 从用户界面的设计，到编写业务逻辑，再到测试。


Angular遵循软件工程的MVC模式,并鼓励展现，数据，和逻辑组件之间的松耦合.通过依赖注入（dependency injection），Angular为客户端的Web应用带来了传统服务端的服务，例如独立于视图的控制。 因此，后端减少了许多负担，产生了更轻的Web应用。

特点：

	* 增强的html语义，更少的js代码
	* 双向数据绑定
	* MVC  只有数据，没有DOM


###### 1.scope(controller)

     $scope是一个把view（一个DOM元素）连结到controller上的对象。在我们的MVC结构里，这个 $scope 将成为model，它提供一个绑定到DOM元素（以及其子元素）上的excecution context。
尽管听起来有点复杂，但 $scope 实际上就是一个JavaScript对象，controller和view都可以访问它，所以我们可以利用它在两者间传递信息。在这个 $scope 对象里，我们既存储数据，又存储将要运行在view上的函数。


	* scope与ng-controller
	* scope作用域继承


###### 2.serivce
    service是一个对象，它是AngularJs容器提供的一种服务，使用依赖注入(DI)的方式提供出去。所有的service都是单例的，即只会初始化一次。

   service的五种表现形式

	* provider
	* factory
	* service
	* constant
	* value

###### 3.directive
    指令:即增强的html语义

   所有的DOM操作封装起来，交由指令单独处理，使DOM操作不影响业务逻辑。


	* 指令是如何被编译的

     当应用引导启动的时候，Angular开始使用 $compile 服务遍历DOM元素。这个服务基于注册过的指令在标记文本中搜索指令。一旦所有的指令都被识别后，An行gular执他们的 compile 方法。如前面所讲的，compile 方法返回一个 link 函数，被添加到稍后执行的 link 函数列表中。这被称为编译阶段。如果一个指令需要被克隆很多次（比如 ng-repeat），compile函数只在编译阶段被执行一次，复制这些模板，但是link 函数会针对每个被复制的行实例被执。所以分开处理，让我们在性能上有一定的提高。这也说明了为什么在 compile 函数中不能访问到scope对象。 在编译阶段之后，就开始了链接（linking）阶段。在这个阶段，所有收集的 link 函数将被一一执行。指令创造出来的模板会在正确的scope下被解析和处理，然后返回具有事件响应的真实的DOM节点。
     对于静态的DOM生成等操作，我们可以放到compile中进行统一处理，link则用来处理动态的html内容。

     http://blog.jobbole.com/62249/

###### 4.filter

    顾名思义 过滤器

###### 5.route

    angular路由服务  （参见channel-content）

###### 6.resource

    restful api接口设计解决方案 （参见channel-content）

### 第二部分  构建AngularJs Web App

#####    第一节 kickstart

	1. 基本结构： 从angular-seed开始(recommend)  clone https://github.com/angular/angular-seed
	2. 入口界面： index.html  （ng-app="app" or angular.bootstrap(document, ['app']);）
	3. 入口函数： app.js   构建 app module. （angular.module("app", [])）
	4. 路由配置及http配置： 配置angular route及http服务（loading状态）
	5. 指令及服务：directives.js & services.js & filters.js
	6. 控制器：    controllers.js
	7. main函数： angular.run() 相当于angular应用的main函数，在service、directive、filter等基础服务装载完毕之后执行的code block。常用于初始化$rootScope，绑定基础工具及服务，提供全局服务
	8. 其他：       本地化及其他util模块等


#####   第二节  构建更纯粹的Angular应用

	* 代码
	*
		1. scope不是百宝箱也不是垃圾箱， 不要把所有有用的没用的function、object都往上绑定，只绑定view用到的部分
		2. service、directive、filter分别写在单一文件，禁止杂糅。controller放在同一目录。（参照标准写法）
		3. 框架外的处理，使用 angular自带服务，$timeout,$location,$window
		4. 一个应用只有一个命名空间，angular面向的只有模块没有全局变量 （angular.module("utils", [])）



	* 应用设计
	*
		1. 注意：所有的service、directive、filter都是单例的!!
		2. 页面业务逻辑拆分，不同区块使用不同的controller，不要一个page包含一个God似无所不能的controller
		3. 没有DOM(对外不可见，全部用指令封装)，只有数据。controller或service中出现html的DOM或css代码会导致逻辑的混杂耦合，对于angularjs自身的绑定对html操作，很多时候你会分不清是view的影响源，导致修复bug，和新增功能，重构的艰难，常常出现很多的诡异行为。最好的实践模式则是把必须的dom，css操作移向angular的Directive，或者view中。在angularjs模式中只有directive和view才能出现dom和css的逻辑操作。
		4. controller中公用的逻辑推向service（factory,constant,value）
		5. controller应该只包含业务逻辑，对于数据模型的格式化过滤尽量交给filter处理。
		6. controller之间如果不是强依赖，只是弱引用则最好用事件$emit,$on,$broadcast,使得controller之间低耦合
		7. controller之间通过service共享数据



### 第三部分  优化你的AngularJs应用


	* 使用ng-cloak/ng-bind 避免闪烁 (optimazation.html)
	* 使用 $routeChangeStart、$routeChangeSuccess切换路由loding状态
	* angular最让我喜欢的是双向绑定，最让我担心的也是双向绑定
	*
		* angular对于单页面应用，最多只允许2000个watcher
		* 所有以ng-开头的指令都会自动生成一个watcher。。。如，ng-src、ng-href、ng-class，{{}}等等，而很多时候我们只需要生成一次数据，不需要后续修改
		* 解决方案：bindonce https://github.com/Pasvaz/bindonce   angular官方有计划在1.3.x版本中加入类似功能，坐等

	* 缓存你的请求（提供统一的http request service，在该service中将请求缓存进$cache）
	* 优化watch $scope.$watch(watchExpression, modelChangeCallback)
	*
		* 避免watchExpression中执行耗时操作，因为它在每次$digest都会执行1~2次。
		* 避免watchExpression中操作dom，因为它很耗时。
		* console.log 也很耗时，记得发布时干掉它。
		* ng-if vs ng-show, 前者会移除DOM和对应的watch
		* 及时移除不必要的$watch
		* 避免深度watch， 即第三个参数为true
		* 减少watch的变量长度

	* $apply vs $digest
	*
		* $apply会使ng进入$digest cycle 并从$rootScope开始遍历(深度优先)检查数据变更
		* $digest仅会检查该scope和它的子scope，当你确定当前操作仅影响它们时，用$digest可以稍微提升性能
		* $apply前先做$$phase判断。 !$scope.$$phase || $scope.$apply();

	* 延迟执行
	*
		* 一些不必要的操作，放到$timeout里面延迟执行
		* 如果不涉及数据变更，还可以加上第三个参数false，避免调用$apply
		* 对时间有要求的，第二个参数可以设置为0。

	* $evalAsync vs $timeout
	*
		* http://stackoverflow.com/questions/17301572/angularjs-evalasync-vs-timeout
		* directive中执行的$evalAsync， 会在angular操作DOM之后，浏览器渲染之前执行
		* controller中执行的$evalAsync， 会在angular操作DOM之前执行，一般不这么用
		* 而使用$timeout，会在浏览器渲染之后执行

	* 慎用filter : 在$digest过程中，filter会执行很多次，至少两次。所以要避免在filter中执行耗时操作。
	* 优化ng-repeat
	*
		* 限制列表个数
		* bindonce
		* 使用track by: 刷新数据时，我们常这么做：$scope.tasks = data || [];，这会导致angular移除掉所有的DOM，重新创建和渲染。若优化为ng-repeat="task in tasks track by task.id后，angular就能复用task对应的原DOM进行更新，减少不必要渲染。参见：http://www.codelord.net/2014/04/15/improving-ng-repeat-performance-with-track-by

	* directive
	*
		* 跟scope数据无关的操作放在compile阶段，它只执行一次。
		* 除了directive外其他地方，特别是controller里面不要操作dom， 尤其是绑定到scope后，便是灾难。
		* 改变以前使用JQuery那样以DOM为中心的思维，拥抱以数据为中心的思维。



### 画外篇：
脏数据检查 != 轮询检查更新谈起angular的脏检查机制(dirty-checking), 常见的误解就是认为： ng是定时轮询去检查model是否变更。
其实，ng只有在指定事件触发后，才进入$digest cycle：

	* DOM事件，譬如用户输入文本，点击按钮等。(ng-click)
	* XHR响应事件 ($http)
	* 浏览器Location变更事件 ($location)
	* Timer事件($timeout, $interval)
	* 执行$digest()或$apply()


参考《mastering web application development with angularjs》 P294
$digest后批量更新UI传统的JS MVC框架, 数据变更是通过setter去触发事件，然后立即更新UI。
而angular则是进入$digest cycle，等待所有model都稳定后，才批量一次性更新UI。
这种机制能减少浏览器repaint次数，从而提高性能。
参考《mastering web application development with angularjs》 P296
另, 推荐阅读: 构建自己的AngularJS，第一部分：Scope和Digest

### MIT
  [1]: https://github.com/zensh/jsgen
  [2]: http://angularjs.cn
  [3]: https://github.com/
  [4]: https://github.com/joyent/node
  [5]: https://github.com/angular/angular.js
  [6]: https://github.com/mongodb/mongo
  [7]: https://github.com/twitter/bootstrap
  [8]: https://github.com/DoubleSpout/rrestjs
  [9]: https://github.com/kissjs/node-mongoskin
  [10]: https://github.com/leizongmin/js-xss
  [11]: http://cnodejs.org/
  [12]: https://github.com/zensh/jsgen/blob/master/README_en.md