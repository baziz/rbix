/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	var _routes = __webpack_require__(2);

	var _routes2 = _interopRequireDefault(_routes);

	var _globalRouter = __webpack_require__(135);

	/* Initialize Locales */

	var _globalRouter2 = _interopRequireDefault(_globalRouter);

	l20n.initializeLocales(("atlas"), {
	  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
	  'default': 'en-US'
	});

	Pace.once('hide', function () {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	module.exports = (0, _globalRouter2['default'])(_routes2['default']);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var Ploader = React.createClass({
	  displayName: 'Ploader',

	  getInitialState: function getInitialState() {
	    return {
	      display: 'none'
	    };
	  },
	  show: function show(cb) {
	    this.setState({ display: 'block' }, cb);
	  },
	  hide: function hide(cb) {
	    this.setState({ display: 'none' }, cb);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'preloader', style: { display: this.state.display } },
	      React.createElement('img', { src: '/imgs/preloader.gif', width: '128', height: '128' })
	    );
	  }
	});

	if ('document' in window) {
	  window.Preloader = React.render(React.createElement(Ploader, null), document.getElementById('app-preloader'));
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _reactRouterLibBrowserHistory = __webpack_require__(33);

	var _reactRouterLibBrowserHistory2 = _interopRequireDefault(_reactRouterLibBrowserHistory);

	var _reactRouterLibHashHistory = __webpack_require__(35);

	var _reactRouterLibHashHistory2 = _interopRequireDefault(_reactRouterLibHashHistory);

	var _routesBlank = __webpack_require__(36);

	var _routesBlank2 = _interopRequireDefault(_routesBlank);

	exports['default'] = function (withHistory, onUpdate) {
	  var history = withHistory ? Modernizr.history ? new _reactRouterLibBrowserHistory2['default']() : new _reactRouterLibHashHistory2['default']() : null;
	  return React.createElement(
	    _reactRouter.Router,
	    { history: history, onUpdate: onUpdate },
	    React.createElement(_reactRouter.Route, { path: '/', component: _routesBlank2['default'] })
	  );
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(4);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(27);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	/* components (configuration) */

	var _Redirect2 = __webpack_require__(28);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(29);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _Navigation2 = __webpack_require__(30);

	var _Navigation3 = _interopRequireDefault(_Navigation2);

	exports.Navigation = _Navigation3['default'];

	var _TransitionHook2 = __webpack_require__(31);

	var _TransitionHook3 = _interopRequireDefault(_TransitionHook2);

	exports.TransitionHook = _TransitionHook3['default'];

	var _State2 = __webpack_require__(32);

	var _State3 = _interopRequireDefault(_State2);

	exports.State = _State3['default'];

	/* utils */

	var _RouteUtils = __webpack_require__(10);

	exports.createRoutesFromReactChildren = _RouteUtils.createRoutesFromReactChildren;

	var _PropTypes2 = __webpack_require__(18);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _AsyncUtils = __webpack_require__(9);

	var _RouteUtils = __webpack_require__(10);

	var _RoutingUtils = __webpack_require__(11);

	var _PropTypes = __webpack_require__(18);

	var _RouterContextMixin = __webpack_require__(23);

	var _RouterContextMixin2 = _interopRequireDefault(_RouterContextMixin);

	var _ScrollManagementMixin = __webpack_require__(24);

	var _ScrollManagementMixin2 = _interopRequireDefault(_ScrollManagementMixin);

	var _Location = __webpack_require__(19);

	var _Transition = __webpack_require__(26);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _React$PropTypes = _react2['default'].PropTypes;
	var arrayOf = _React$PropTypes.arrayOf;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function runTransition(prevState, routes, location, hooks, callback) {
	  var transition = new _Transition2['default']();

	  (0, _RoutingUtils.getState)(routes, location, function (error, nextState) {
	    if (error || nextState == null || transition.isCancelled) {
	      callback(error, null, transition);
	    } else {
	      nextState.location = location;

	      var transitionHooks = (0, _RoutingUtils.getTransitionHooks)(prevState, nextState);
	      if (Array.isArray(hooks)) transitionHooks.unshift.apply(transitionHooks, hooks);

	      (0, _AsyncUtils.loopAsync)(transitionHooks.length, function (index, next, done) {
	        transitionHooks[index](nextState, transition, function (error) {
	          if (error || transition.isCancelled) {
	            done(error); // No need to continue.
	          } else {
	            next();
	          }
	        });
	      }, function (error) {
	        if (error || transition.isCancelled) {
	          callback(error, null, transition);
	        } else {
	          (0, _RoutingUtils.getComponents)(nextState.branch, function (error, components) {
	            if (error || transition.isCancelled) {
	              callback(error, null, transition);
	            } else {
	              nextState.components = components;
	              callback(null, nextState, transition);
	            }
	          });
	        }
	      });
	    }
	  });
	}

	var Router = _react2['default'].createClass({
	  displayName: 'Router',

	  mixins: [_RouterContextMixin2['default'], _ScrollManagementMixin2['default']],

	  statics: {

	    /**
	     * Runs a transition to the given location using the given routes and
	     * transition hooks (optional) and calls callback(error, state, transition)
	     * when finished. This is primarily useful for server-side rendering.
	     */
	    run: function run(routes, location, transitionHooks, callback) {
	      if (typeof transitionHooks === 'function') {
	        callback = transitionHooks;
	        transitionHooks = null;
	      }

	      (0, _invariant2['default'])(typeof callback === 'function', 'Router.run needs a callback');

	      runTransition(null, routes, location, transitionHooks, callback);
	    }

	  },

	  propTypes: {
	    createElement: func.isRequired,
	    onAbort: func,
	    onError: func,
	    onUpdate: func,

	    // Client-side
	    history: _PropTypes.history,
	    routes: _PropTypes.routes,
	    // Routes may also be given as children (JSX)
	    children: _PropTypes.routes,

	    // Server-side
	    location: _PropTypes.location,
	    branch: _PropTypes.routes,
	    params: object,
	    components: arrayOf(_PropTypes.components)
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react.createElement
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isTransitioning: false,
	      location: null,
	      branch: null,
	      params: null,
	      components: null
	    };
	  },

	  _updateState: function _updateState(location) {
	    var _this = this;

	    (0, _invariant2['default'])((0, _Location.isLocation)(location), 'A <Router> needs a valid Location');

	    var hooks = this.transitionHooks;
	    if (hooks) hooks = hooks.map(function (hook) {
	      return (0, _RoutingUtils.createTransitionHook)(hook, _this);
	    });

	    this.setState({ isTransitioning: true });

	    runTransition(this.state, this.routes, location, hooks, function (error, state, transition) {
	      if (error) {
	        _this.handleError(error);
	      } else if (transition.isCancelled) {
	        if (transition.redirectInfo) {
	          var _transition$redirectInfo = transition.redirectInfo;
	          var pathname = _transition$redirectInfo.pathname;
	          var query = _transition$redirectInfo.query;
	          var state = _transition$redirectInfo.state;

	          _this.replaceWith(pathname, query, state);
	        } else {
	          (0, _invariant2['default'])(_this.state.location, 'You may not abort the initial transition');

	          _this.handleAbort(transition.abortReason);
	        }
	      } else if (state == null) {
	        (0, _warning2['default'])(false, 'Location "%s" did not match any routes', location.pathname);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }

	      _this.setState({ isTransitioning: false });
	    });
	  },

	  /**
	   * Adds a transition hook that runs before all route hooks in a
	   * transition. The signature is the same as route transition hooks.
	   */
	  addTransitionHook: function addTransitionHook(hook) {
	    if (!this.transitionHooks) this.transitionHooks = [];

	    this.transitionHooks.push(hook);
	  },

	  /**
	   * Removes the given transition hook.
	   */
	  removeTransitionHook: function removeTransitionHook(hook) {
	    if (this.transitionHooks) this.transitionHooks = this.transitionHooks.filter(function (h) {
	      return h !== hook;
	    });
	  },

	  handleAbort: function handleAbort(reason) {
	    if (this.props.onAbort) {
	      this.props.onAbort.call(this, reason);
	    } else {
	      // The best we can do here is goBack so the location state reverts
	      // to what it was. However, we also set a flag so that we know not
	      // to run through _updateState again since state did not change.
	      this._ignoreNextHistoryChange = true;
	      this.goBack();
	    }
	  },

	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably originated in getChildRoutes or getComponents.
	    }
	  },

	  handleHistoryChange: function handleHistoryChange() {
	    if (this._ignoreNextHistoryChange) {
	      this._ignoreNextHistoryChange = false;
	    } else {
	      this._updateState(this.props.history.location);
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var _props = this.props;
	    var history = _props.history;
	    var routes = _props.routes;
	    var children = _props.children;
	    var location = _props.location;
	    var branch = _props.branch;
	    var params = _props.params;
	    var components = _props.components;

	    if (history) {
	      (0, _invariant2['default'])(routes || children, 'Client-side <Router>s need routes. Try using <Router routes> or ' + 'passing your routes as nested <Route> children');

	      this.routes = (0, _RouteUtils.createRoutes)(routes || children);

	      if (typeof history.setup === 'function') history.setup();

	      // We need to listen first in case we redirect immediately.
	      if (history.addChangeListener) history.addChangeListener(this.handleHistoryChange);

	      this._updateState(history.location);
	    } else {
	      (0, _invariant2['default'])(location && branch && params && components, 'Server-side <Router>s need location, branch, params, and components ' + 'props. Try using Router.run to get all the props you need');

	      this.setState({ location: location, branch: branch, params: params, components: components });
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    (0, _invariant2['default'])(this.props.history === nextProps.history, '<Router history> may not be changed');

	    if (nextProps.history) {
	      var currentRoutes = this.props.routes || this.props.children;
	      var nextRoutes = nextProps.routes || nextProps.children;

	      if (currentRoutes !== nextRoutes) {
	        this.routes = (0, _RouteUtils.createRoutes)(nextRoutes);

	        // Call this here because _updateState
	        // uses this.routes to determine state.
	        if (nextProps.history.location) this._updateState(nextProps.history.location);
	      }
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var history = this.props.history;

	    if (history && history.removeChangeListener) history.removeChangeListener(this.handleHistoryChange);
	  },

	  _createElement: function _createElement(component, props) {
	    return typeof component === 'function' ? this.props.createElement(component, props) : null;
	  },

	  render: function render() {
	    var _this2 = this;

	    var _state = this.state;
	    var branch = _state.branch;
	    var params = _state.params;
	    var components = _state.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = branch[index];
	        var routeParams = (0, _RoutingUtils.getRouteParams)(route, params);
	        var props = _extends({}, _this2.state, { route: route, routeParams: routeParams });

	        if ((0, _react.isValidElement)(element)) {
	          props.children = element;
	        } else if (element) {
	          // In render, do var { header, sidebar } = this.props;
	          _extends(props, element);
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this2._createElement(components[key], props);

	          return elements;
	        }

	        return _this2._createElement(components, props);
	      }, element);
	    }

	    (0, _invariant2['default'])(element === null || element === false || (0, _react.isValidElement)(element), 'The root route must render a single element');

	    return element;
	  }

	});

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var warning = function() {};

	if (__DEV__) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	exports.hashAsync = hashAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      currentTurn += 1;
	      work.call(this, currentTurn - 1, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false;
	  var doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

	function hashAsync(object, work, callback) {
	  var keys = Object.keys(object);

	  mapAsync(keys, function (key, index, callback) {
	    work(object[key], callback);
	  }, function (error, valuesArray) {
	    if (error) {
	      callback(error);
	    } else {
	      var values = valuesArray.reduce(function (memo, results, index) {
	        memo[keys[index]] = results;
	        return memo;
	      }, {});

	      callback(null, values);
	    }
	  });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || (0, _react.isValidElement)(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) (0, _warning2['default'])(false, error.message);
	    }
	  }
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = _extends({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    route.childRoutes = createRoutesFromReactChildren(route.children);
	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router';
	 *   
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   );
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if ((0, _react.isValidElement)(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        routes.push(element.type.createRouteFromReactElement(element));
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (!Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getState = getState;
	exports.createTransitionHook = createTransitionHook;
	exports.getTransitionHooks = getTransitionHooks;
	exports.getComponents = getComponents;
	exports.getRouteParams = getRouteParams;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(10);

	var _URLUtils = __webpack_require__(12);

	var _AsyncUtils = __webpack_require__(9);

	function getChildRoutes(route, locationState, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(locationState, callback);
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, locationState, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(callback, locationState);
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduceRight(function (params, paramName, index) {
	    var paramValue = paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].unshift(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [paramValue, params[paramName]];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, pathname, locationState, callback) {
	  var _matchPattern = (0, _URLUtils.matchPattern)(route.path, pathname);

	  var remainingPathname = _matchPattern.remainingPathname;
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  var isExactMatch = remainingPathname === '';

	  if (isExactMatch && route.path) {
	    var params = createParams(paramNames, paramValues);
	    var branch = [route];

	    getIndexRoute(route, locationState, function (error, indexRoute) {
	      if (error) {
	        callback(error);
	      } else {
	        if (indexRoute) branch.push(indexRoute);

	        callback(null, { params: params, branch: branch });
	      }
	    });
	  } else if (remainingPathname != null) {
	    // This route matched at least some of the path.
	    getChildRoutes(route, locationState, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, remainingPathname, locationState, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            assignParams(match.params, paramNames, paramValues);
	            match.branch.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        });
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	function matchRoutes(routes, pathname, locationState, callback) {
	  routes = (0, _RouteUtils.createRoutes)(routes);

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], pathname, locationState, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object may have the
	 * following properties:
	 *
	 * - branch       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */

	function getState(routes, location, callback) {
	  matchRoutes(routes, (0, _URLUtils.stripLeadingSlashes)(location.pathname), location.state, callback);
	}

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Runs a diff on the two router states and returns an array of two
	 * arrays: 1) the routes that we are leaving, starting with the leaf
	 * route and 2) the routes that we are entering, ending with the leaf
	 * route.
	 */
	function computeDiff(prevState, nextState) {
	  var fromRoutes = prevState && prevState.branch;
	  var toRoutes = nextState.branch;

	  var leavingRoutes, enteringRoutes;
	  if (fromRoutes) {
	    leavingRoutes = fromRoutes.filter(function (route) {
	      return toRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leavingRoutes.reverse();

	    enteringRoutes = toRoutes.filter(function (route) {
	      return fromRoutes.indexOf(route) === -1 || leavingRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leavingRoutes = [];
	    enteringRoutes = toRoutes;
	  }

	  return [leavingRoutes, enteringRoutes];
	}

	function createTransitionHook(fn, context) {
	  return function (nextState, transition, callback) {
	    if (fn.length > 2) {
	      fn.call(context, nextState, transition, callback);
	    } else {
	      // Assume fn executes synchronously and
	      // automatically call the callback for them.
	      fn.call(context, nextState, transition);
	      callback();
	    }
	  };
	}

	function getTransitionHooksFromRoutes(routes, hookName) {
	  return routes.reduce(function (hooks, route) {
	    if (route[hookName]) hooks.push(createTransitionHook(route[hookName], route));

	    return hooks;
	  }, []);
	}

	/**
	 * Compiles and returns an array of transition hook functions that
	 * should be called before we transition to a new state. Transition
	 * hook signatures are:
	 *
	 *   - route.onLeave(nextState, transition[, callback ])
	 *   - route.onEnter(nextState, transition[, callback ])
	 *
	 * Transition hooks run in order from the leaf route in the branch
	 * we're leaving, up the tree to the common parent route, and back
	 * down the branch we're entering to the leaf route.
	 *
	 * If a transition hook needs to execute asynchronously it may have
	 * a 3rd argument that it should call when it is finished. Otherwise
	 * the transition executes synchronously.
	 */

	function getTransitionHooks(prevState, nextState) {
	  var _computeDiff = computeDiff(prevState, nextState);

	  var leavingRoutes = _computeDiff[0];
	  var enteringRoutes = _computeDiff[1];

	  var hooks = getTransitionHooksFromRoutes(leavingRoutes, 'onLeave');

	  hooks.push.apply(hooks, getTransitionHooksFromRoutes(enteringRoutes, 'onEnter'));

	  return hooks;
	}

	function getComponentsForRoute(route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponents) {
	    route.getComponents(callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getComponents method.
	 */

	function getComponents(routes, callback) {
	  (0, _AsyncUtils.mapAsync)(routes, function (route, index, callback) {
	    getComponentsForRoute(route, callback);
	  }, callback);
	}

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */

	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

	  return routeParams;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.stringifyQuery = stringifyQuery;
	exports.getPathname = getPathname;
	exports.getQueryString = getQueryString;
	exports.stripLeadingSlashes = stripLeadingSlashes;
	exports.isAbsolutePath = isAbsolutePath;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _qs = __webpack_require__(13);

	var _qs2 = _interopRequireDefault(_qs);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var parseQueryString = _qs2['default'].parse;

	exports.parseQueryString = parseQueryString;

	function stringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}

	var queryMatcher = /\?([\s\S]*)$/;

	function getPathname(path) {
	  return path.replace(queryMatcher, '');
	}

	function getQueryString(path) {
	  var match = path.match(queryMatcher);
	  return match ? match[1] : '';
	}

	function stripLeadingSlashes(path) {
	  return path ? path.replace(/^\/+/, '') : '';
	}

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  var _compilePattern2 = compilePattern(stripLeadingSlashes(pattern));

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Ignore trailing slashes

	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname, paramValues;
	  if (match != null) {
	    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
	      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
	    });

	    if (captureRemaining) {
	      remainingPathname = paramValues.pop();
	    } else {
	      remainingPathname = pathname.replace(match[0], '');
	    }
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, stripLeadingSlashes(pathname));

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token, paramName, paramValue;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

	      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

	      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(15);
	var Parse = __webpack_require__(17);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(16);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(16);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Location = __webpack_require__(19);

	var _Location2 = _interopRequireDefault(_Location);

	var _History = __webpack_require__(22);

	var _History2 = _interopRequireDefault(_History);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	var arrayOf = _React$PropTypes.arrayOf;
	var instanceOf = _React$PropTypes.instanceOf;
	var oneOfType = _React$PropTypes.oneOfType;
	var element = _React$PropTypes.element;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var component = func;
	var components = oneOfType([component, object]);
	var history = instanceOf(_History2['default']);
	var location = instanceOf(_Location2['default']);
	var route = oneOfType([object, element]);
	var routes = oneOfType([route, arrayOf(route)]);

	module.exports = {
	  falsy: falsy,
	  component: component,
	  components: components,
	  history: history,
	  location: location,
	  route: route,
	  routes: routes
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _NavigationTypes = __webpack_require__(20);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	/**
	 * A Location answers two important questions:
	 *
	 * 1. Where am I?
	 * 2. How did I get here?
	 */

	var Location = (function () {
	  function Location() {
	    var pathname = arguments[0] === undefined ? '/' : arguments[0];
	    var query = arguments[1] === undefined ? null : arguments[1];
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

	    _classCallCheck(this, Location);

	    this.pathname = pathname;
	    this.query = query;
	    this.state = state;
	    this.navigationType = navigationType;
	  }

	  Location.isLocation = function isLocation(object) {
	    return object instanceof Location;
	  };

	  return Location;
	})();

	exports['default'] = Location;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(21);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	var NavigationTypes = (0, _keymirror2['default'])({

	  /**
	   * Indicates that navigation was caused by a call to history.push.
	   */
	  PUSH: null,

	  /**
	   * Indicates that navigation was caused by a call to history.replace.
	   */
	  REPLACE: null,

	  /**
	   * Indicates that navigation was caused by some other action such
	   * as using a browser's back/forward buttons and/or manually manipulating
	   * the URL in a browser's location bar. This is the default.
	   *
	   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	   * for more information.
	   */
	  POP: null

	});

	exports['default'] = NavigationTypes;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(12);

	var _Location = __webpack_require__(19);

	var _Location2 = _interopRequireDefault(_Location);

	var RequiredHistorySubclassMethods = ['pushState', 'replaceState', 'go'];

	function createRandomKey() {
	  return Math.random().toString(36).substr(2);
	}

	/**
	 * A history interface that normalizes the differences across
	 * various environments and implementations. Requires concrete
	 * subclasses to implement the following methods:
	 *
	 * - pushState(state, path)
	 * - replaceState(state, path)
	 * - go(n)
	 */

	var History = (function () {
	  function History() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, History);

	    RequiredHistorySubclassMethods.forEach(function (method) {
	      (0, _invariant2['default'])(typeof this[method] === 'function', '%s needs a "%s" method', this.constructor.name, method);
	    }, this);

	    this.parseQueryString = options.parseQueryString || _URLUtils.parseQueryString;
	    this.changeListeners = [];
	    this.location = null;
	  }

	  History.prototype._notifyChange = function _notifyChange() {
	    for (var i = 0, len = this.changeListeners.length; i < len; ++i) this.changeListeners[i].call(this);
	  };

	  History.prototype.addChangeListener = function addChangeListener(listener) {
	    this.changeListeners.push(listener);
	  };

	  History.prototype.removeChangeListener = function removeChangeListener(listener) {
	    this.changeListeners = this.changeListeners.filter(function (li) {
	      return li !== listener;
	    });
	  };

	  History.prototype.back = function back() {
	    this.go(-1);
	  };

	  History.prototype.forward = function forward() {
	    this.go(1);
	  };

	  History.prototype._createState = function _createState(state) {
	    state = state || {};

	    if (!state.key) state.key = createRandomKey();

	    return state;
	  };

	  History.prototype.createLocation = function createLocation(path, state, navigationType) {
	    var pathname = (0, _URLUtils.getPathname)(path);
	    var queryString = (0, _URLUtils.getQueryString)(path);
	    var query = queryString ? this.parseQueryString(queryString) : null;
	    return new _Location2['default'](pathname, query, state, navigationType);
	  };

	  return History;
	})();

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(12);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function pathnameIsActive(pathname, activePathname) {
	  if ((0, _URLUtils.stripLeadingSlashes)(activePathname).indexOf((0, _URLUtils.stripLeadingSlashes)(pathname)) === 0) return true; // This quick comparison satisfies most use cases.

	  // TODO: Implement a more stringent comparison that checks
	  // to see if the pathname matches any routes (and params)
	  // in the currently active branch.

	  return false;
	}

	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

	  return true;
	}

	var RouterContextMixin = {

	  propTypes: {
	    stringifyQuery: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      stringifyQuery: _URLUtils.stringifyQuery
	    };
	  },

	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this
	    };
	  },

	  /**
	   * Returns a full URL path from the given pathname and query.
	   */
	  makePath: function makePath(pathname, query) {
	    if (query) {
	      if (typeof query !== 'string') query = this.props.stringifyQuery(query);

	      if (query !== '') return pathname + '?' + query;
	    }

	    return pathname;
	  },

	  /**
	   * Returns a string that may safely be used to link to the given
	   * pathname and query.
	   */
	  makeHref: function makeHref(pathname, query) {
	    var path = this.makePath(pathname, query);
	    var history = this.props.history;

	    if (history && history.makeHref) return history.makeHref(path);

	    return path;
	  },

	  /**
	   * Pushes a new Location onto the history stack.
	   */
	  transitionTo: function transitionTo(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#transitionTo is client-side only (needs history)');

	    history.pushState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Replaces the current Location on the history stack.
	   */
	  replaceWith: function replaceWith(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#replaceWith is client-side only (needs history)');

	    history.replaceState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Navigates forward/backward n entries in the history stack.
	   */
	  go: function go(n) {
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#go is client-side only (needs history)');

	    history.go(n);
	  },

	  /**
	   * Navigates back one entry in the history stack. This is identical to
	   * the user clicking the browser's back button.
	   */
	  goBack: function goBack() {
	    this.go(-1);
	  },

	  /**
	   * Navigates forward one entry in the history stack. This is identical to
	   * the user clicking the browser's forward button.
	   */
	  goForward: function goForward() {
	    this.go(1);
	  },

	  /**
	   * Returns true if a <Link> to the given pathname/query combination is
	   * currently active.
	   */
	  isActive: function isActive(pathname, query) {
	    var location = this.state.location;

	    if (location == null) return false;

	    return pathnameIsActive(pathname, location.pathname) && queryIsActive(query, location.query);
	  }

	};

	exports['default'] = RouterContextMixin;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _DOMUtils = __webpack_require__(25);

	var _NavigationTypes = __webpack_require__(20);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var func = _react2['default'].PropTypes.func;

	function getCommonAncestors(branch, otherBranch) {
	  return branch.filter(function (route) {
	    return otherBranch.indexOf(route) !== -1;
	  });
	}

	function shouldUpdateScrollPosition(state, prevState) {
	  var location = state.location;
	  var branch = state.branch;
	  var prevLocation = prevState.location;
	  var prevBranch = prevState.branch;

	  // When an onEnter hook uses transition.to to redirect
	  // on the initial load prevLocation is null, so assume
	  // we don't want to update the scroll position.
	  if (prevLocation === null) return false;

	  // Don't update scroll position if only the query has changed.
	  if (location.pathname === prevLocation.pathname) return false;

	  // Don't update scroll position if any of the ancestors
	  // has `ignoreScrollPosition` set to `true` on the route.
	  var sharedAncestors = getCommonAncestors(branch, prevBranch);
	  if (sharedAncestors.some(function (route) {
	    return route.ignoreScrollBehavior;
	  })) return false;

	  return true;
	}

	function updateWindowScrollPosition(navigationType, scrollX, scrollY) {
	  if (_DOMUtils.canUseDOM) {
	    if (navigationType === _NavigationTypes2['default'].POP) {
	      (0, _DOMUtils.setWindowScrollPosition)(scrollX, scrollY);
	    } else {
	      (0, _DOMUtils.setWindowScrollPosition)(0, 0);
	    }
	  }
	}

	var ScrollManagementMixin = {

	  propTypes: {
	    shouldUpdateScrollPosition: func.isRequired,
	    updateScrollPosition: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      shouldUpdateScrollPosition: shouldUpdateScrollPosition,
	      updateScrollPosition: updateWindowScrollPosition
	    };
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var location = this.state.location;

	    var locationState = location && location.state;

	    if (locationState && this.props.shouldUpdateScrollPosition(this.state, prevState)) {
	      var scrollX = locationState.scrollX;
	      var scrollY = locationState.scrollY;

	      this.props.updateScrollPosition(location.navigationType, scrollX || 0, scrollY || 0);
	    }
	  }

	};

	exports['default'] = ScrollManagementMixin;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.getWindowScrollPosition = getWindowScrollPosition;
	exports.setWindowScrollPosition = setWindowScrollPosition;
	exports.supportsHistory = supportsHistory;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	exports.canUseDOM = canUseDOM;

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search;
	}

	function getWindowScrollPosition() {
	  return {
	    scrollX: window.pageXOffset || document.documentElement.scrollLeft,
	    scrollY: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	function setWindowScrollPosition(scrollX, scrollY) {
	  window.scrollTo(scrollX, scrollY);
	}

	/**
	 * taken from modernizr
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = (function () {
	  function Transition() {
	    _classCallCheck(this, Transition);

	    this.isCancelled = false;
	    this.redirectInfo = null;
	    this.abortReason = null;
	  }

	  Transition.prototype.to = function to(pathname, query, state) {
	    this.redirectInfo = { pathname: pathname, query: query, state: state };
	    this.isCancelled = true;
	  };

	  Transition.prototype.abort = function abort(reason) {
	    this.abortReason = reason;
	    this.isCancelled = true;
	  };

	  return Transition;
	})();

	exports["default"] = Transition;
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="/posts/123" query={{ show:true }}/>
	 */
	var Link = _react2['default'].createClass({
	  displayName: 'Link',

	  contextTypes: {
	    router: object
	  },

	  propTypes: {
	    activeStyle: object,
	    activeClassName: string,
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onClick: func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      activeClassName: 'active',
	      style: {}
	    };
	  },

	  handleClick: function handleClick(event) {
	    var allowTransition = true;
	    var clickResult;

	    if (this.props.onClick) clickResult = this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	    event.preventDefault();

	    if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.query, this.props.state);
	  },

	  render: function render() {
	    var router = this.context.router;
	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;

	    var props = _extends({}, this.props, {
	      href: router.makeHref(to, query),
	      onClick: this.handleClick
	    });

	    // ignore if rendered outside of the context of a router, simplifies unit testing
	    if (router && router.isActive(to, query)) {
	      if (props.activeClassName) props.className += props.className !== '' ? ' ' + props.activeClassName : props.activeClassName;

	      if (props.activeStyle) props.style = _extends({}, props.style, props.activeStyle);
	    }

	    return _react2['default'].createElement('a', props);
	  }

	});

	exports.Link = Link;
	exports['default'] = Link;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(10);

	var _URLUtils = __webpack_require__(12);

	var _PropTypes = __webpack_require__(18);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, transition) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = route.to ? (0, _URLUtils.formatPattern)(route.to, params) : location.pathname;

	        transition.to(pathname, route.query || location.query, route.state || location.state);
	      };

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Redirect> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Redirect = Redirect;
	exports['default'] = Redirect;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(8);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(10);

	var _PropTypes = __webpack_require__(18);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the page when
	 * the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 */
	var Route = _react2['default'].createClass({
	  displayName: 'Route',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.handler) {
	        (0, _warning2['default'])(false, '<Route handler> is deprecated, use <Route component> instead');
	        route.component = route.handler;
	        delete route.handler;
	      }

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    ignoreScrollBehavior: bool,
	    handler: _PropTypes.component,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponents: func
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Route> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Route = Route;
	exports['default'] = Route;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   import { Navigation } from 'react-router';
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterNavigationMethods = ['makePath', 'makeHref', 'transitionTo', 'replaceWith', 'go', 'goBack', 'goForward'];

	RouterNavigationMethods.forEach(function (method) {
	  Navigation[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = Navigation;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var object = _react2['default'].PropTypes.object;

	var TransitionHook = {

	  contextTypes: {
	    router: object.isRequired
	  },

	  componentDidMount: function componentDidMount() {
	    (0, _warning2['default'])(typeof this.routerWillLeave === 'function', 'Components that mixin TransitionHook should have a routerWillLeave method, check %s', this.constructor.displayName || this.constructor.name);

	    if (this.routerWillLeave) this.context.router.addTransitionHook(this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.routerWillLeave) this.context.router.removeTransitionHook(this.routerWillLeave);
	  }

	};

	exports['default'] = TransitionHook;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   import { State } from 'react-router';
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ State ],
	 *     render() {
	 *       var className = this.props.className;
	 *
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *
	 *       return React.createElement('a', { className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterStateMethods = ['isActive'];

	RouterStateMethods.forEach(function (method) {
	  State[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = State;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DOMHistory2 = __webpack_require__(34);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _DOMUtils = __webpack_require__(25);

	var _NavigationTypes = __webpack_require__(20);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	function updateCurrentState(extraState) {
	  var state = window.history.state;

	  if (state) window.history.replaceState(_extends(state, extraState), '');
	}

	/**
	 * A history implementation for DOM environments that support the
	 * HTML5 history API (pushState, replaceState, and the popstate event).
	 * Provides the cleanest URLs and should always be used in browser
	 * environments if possible.
	 *
	 * Note: BrowserHistory automatically falls back to using full page
	 * refreshes if HTML5 history is not available, so URLs are always
	 * the same across browsers.
	 */

	var BrowserHistory = (function (_DOMHistory) {
	  function BrowserHistory(options) {
	    _classCallCheck(this, BrowserHistory);

	    _DOMHistory.call(this, options);
	    this.handlePopState = this.handlePopState.bind(this);
	    this.isSupported = (0, _DOMUtils.supportsHistory)();
	  }

	  _inherits(BrowserHistory, _DOMHistory);

	  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var state = null;

	    if (this.isSupported) {
	      var historyState = window.history.state;
	      state = this._createState(historyState);

	      if (!historyState || !historyState.key) window.history.replaceState(state, '');
	    }

	    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
	  };

	  BrowserHistory.prototype.setup = function setup() {
	    if (this.location == null) this._updateLocation();
	  };

	  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
	    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	    this._updateLocation(_NavigationTypes2['default'].POP);
	    this._notifyChange();
	  };

	  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.attachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.detachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate

	  BrowserHistory.prototype.pushState = function pushState(state, path) {
	    if (this.isSupported) {
	      updateCurrentState(this.getScrollPosition());

	      state = this._createState(state);

	      window.history.pushState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
	      this._notifyChange();
	    } else {
	      window.location = path;
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate

	  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
	    if (this.isSupported) {
	      state = this._createState(state);

	      window.history.replaceState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
	      this._notifyChange();
	    } else {
	      window.location.replace(path);
	    }
	  };

	  return BrowserHistory;
	})(_DOMHistory3['default']);

	var history = new BrowserHistory();
	exports.history = history;
	exports['default'] = BrowserHistory;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _History2 = __webpack_require__(22);

	var _History3 = _interopRequireDefault(_History2);

	var _DOMUtils = __webpack_require__(25);

	/**
	 * A history interface that assumes a DOM environment.
	 */

	var DOMHistory = (function (_History) {
	  function DOMHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, DOMHistory);

	    _History.call(this, options);
	    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
	  }

	  _inherits(DOMHistory, _History);

	  DOMHistory.prototype.go = function go(n) {
	    if (n === 0) return;

	    window.history.go(n);
	  };

	  return DOMHistory;
	})(_History3['default']);

	exports['default'] = DOMHistory;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _DOMHistory2 = __webpack_require__(34);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _NavigationTypes = __webpack_require__(20);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var _DOMUtils = __webpack_require__(25);

	var _URLUtils = __webpack_require__(12);

	var DefaultQueryKey = '_qk';

	function ensureSlash() {
	  var path = (0, _DOMUtils.getHashPath)();

	  if ((0, _URLUtils.isAbsolutePath)(path)) return true;

	  (0, _DOMUtils.replaceHashPath)('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + ('' + key + '=' + value);
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	function saveState(path, queryKey, state) {
	  window.sessionStorage.setItem(state.key, JSON.stringify(state));
	  return addQueryStringValueToPath(path, queryKey, state.key);
	}

	function readState(path, queryKey) {
	  var sessionKey = getQueryStringValueFromPath(path, queryKey);
	  var json = sessionKey && window.sessionStorage.getItem(sessionKey);

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {}
	  }

	  return null;
	}

	function updateCurrentState(queryKey, extraState) {
	  var path = (0, _DOMUtils.getHashPath)();
	  var state = readState(path, queryKey);

	  if (state) saveState(path, queryKey, _extends(state, extraState));
	}

	/**
	 * A history implementation for DOM environments that uses window.location.hash
	 * to store the current path. This is essentially a hack for older browsers that
	 * do not support the HTML5 history API (IE <= 9).
	 *
	 * Support for persistence of state across page refreshes is provided using a
	 * combination of a URL query string parameter and DOM storage. However, this
	 * support is not enabled by default. In order to use it, create your own
	 * HashHistory.
	 *
	 *   import HashHistory from 'react-router/lib/HashHistory';
	 *   var StatefulHashHistory = new HashHistory({ queryKey: '_key' });
	 *   React.render(<Router history={StatefulHashHistory} .../>, ...);
	 */

	var HashHistory = (function (_DOMHistory) {
	  function HashHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, HashHistory);

	    _DOMHistory.call(this, options);
	    this.handleHashChange = this.handleHashChange.bind(this);
	    this.queryKey = options.queryKey;

	    if (typeof this.queryKey !== 'string') this.queryKey = this.queryKey ? DefaultQueryKey : null;
	  }

	  _inherits(HashHistory, _DOMHistory);

	  HashHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var path = (0, _DOMUtils.getHashPath)();
	    var state = this.queryKey ? readState(path, this.queryKey) : null;
	    this.location = this.createLocation(path, state, navigationType);
	  };

	  HashHistory.prototype.setup = function setup() {
	    if (this.location == null) {
	      ensureSlash();
	      this._updateLocation();
	    }
	  };

	  HashHistory.prototype.handleHashChange = function handleHashChange() {
	    if (!ensureSlash()) return;

	    if (this._ignoreNextHashChange) {
	      this._ignoreNextHashChange = false;
	    } else {
	      this._updateLocation(_NavigationTypes2['default'].POP);
	      this._notifyChange();
	    }
	  };

	  HashHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.attachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.detachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.pushState = function pushState(state, path) {
	    (0, _warning2['default'])(this.queryKey || state == null, 'HashHistory needs a queryKey in order to persist state');

	    if (this.queryKey) updateCurrentState(this.queryKey, this.getScrollPosition());

	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    window.location.hash = path;

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);

	    this._notifyChange();
	  };

	  HashHistory.prototype.replaceState = function replaceState(state, path) {
	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    (0, _DOMUtils.replaceHashPath)(path);

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);

	    this._notifyChange();
	  };

	  HashHistory.prototype.makeHref = function makeHref(path) {
	    return '#' + path;
	  };

	  return HashHistory;
	})(_DOMHistory3['default']);

	var history = new HashHistory();
	exports.history = history;
	exports['default'] = HashHistory;

	// Ignore invalid JSON in session storage.

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(38);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(40);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"common/sidebar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(41);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _reactLeaflet = __webpack_require__(42);

	var startPosition = [51.505, -0.09];

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body(props) {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).call(this, props);
	    this.state = { myPosition: this.props.initialPosition };
	  }

	  _createClass(Body, [{
	    key: 'updateCurrentPosition',
	    value: function updateCurrentPosition(updatedPosition) {
	      this.setState({ myPosition: updatedPosition });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ myPosition: this.props.initialPosition });
	      ReactBootstrap.Dispatcher.on('Body:updateCurrentPosition', this.updateCurrentPosition.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      ReactBootstrap.Dispatcher.off('Body:updateCurrentPosition', this.updateCurrentPosition.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelBody,
	                    { className: 'text-center' },
	                    React.createElement(
	                      _reactLeaflet.Map,
	                      { style: { position: "none", height: "400px" }, center: this.state.myPosition, zoom: 13 },
	                      React.createElement(_reactLeaflet.TileLayer, {
	                        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }),
	                      React.createElement(
	                        _reactLeaflet.Marker,
	                        { position: startPosition },
	                        React.createElement(
	                          _reactLeaflet.Popup,
	                          null,
	                          React.createElement(
	                            'span',
	                            null,
	                            'A pretty CSS3 popup.',
	                            React.createElement('br', null),
	                            'Easily customizable.'
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, { initialPosition: startPosition }),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = SidebarMixin;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(38);

	var _classnames2 = _interopRequireDefault(_classnames);

	var openState = !Modernizr.touch ? localStorage.getItem('sidebar-open-state') === 'true' ? true : false : false;

	function SidebarMixin(ComposedComponent) {
	  return React.createClass({
	    displayName: 'SidebarMixin',
	    getInitialState: function getInitialState() {
	      return {
	        open: openState
	      };
	    },
	    isOpen: function isOpen() {
	      return this.state.open === open;
	    },
	    sidebarStateChangeCallback: function sidebarStateChangeCallback(open) {
	      if (this.isOpen()) return;
	      if (open !== undefined) {
	        openState = open;
	      } else {
	        openState = !this.state.open;
	      }
	      this.setState({
	        open: openState // toggle sidebar
	      });
	      localStorage.setItem('sidebar-open-state', openState);
	    },
	    componentWillMount: function componentWillMount() {
	      ReactBootstrap.Dispatcher.on('sidebar', this.sidebarStateChangeCallback);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      ReactBootstrap.Dispatcher.off('sidebar', this.sidebarStateChangeCallback);
	    },
	    render: function render() {
	      return React.createElement(ComposedComponent, _extends({}, this.props, { open: this.state.open }));
	    }
	  });
	}

	var SidebarControlBtn = React.createClass({
	  displayName: 'SidebarControlBtn',

	  getInitialState: function getInitialState() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
	    ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	  },
	  handleState: function handleState(props) {
	    if (props.hasOwnProperty('sidebar')) {
	      if (props.sidebar === this.props.sidebar) {
	        this.setState({ active: true });
	      } else {
	        this.setState({ active: false });
	      }
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
	    var scrollToTop = function scrollToTop() {
	      if ($(window).scrollTop() === 0) return;
	      setTimeout(function () {
	        $('html, body, #body').scrollTop(0);
	        $(window).scrollTop(0);
	        scrollToTop();
	      }, 15);
	    };

	    scrollToTop();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-control-btn', {
	      'active': this.state.active
	    }, this.props.className);

	    var props = _extends({
	      tabIndex: '-1',
	      onClick: this.handleClick
	    }, this.props, {
	      className: classes.trim()
	    });
	    return React.createElement(
	      'li',
	      props,
	      React.createElement(
	        'a',
	        { href: '#', tabIndex: '-1' },
	        React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph })
	      )
	    );
	  }
	});

	exports.SidebarControlBtn = SidebarControlBtn;
	var SidebarControls = React.createClass({
	  displayName: 'SidebarControls',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-controls-container', this.props.className);
	    var props = _extends({
	      dir: 'ltr'
	    }, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'div',
	      _extends({}, props, { children: null }),
	      React.createElement(
	        'div',
	        { className: 'sidebar-controls', tabIndex: '-1' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.SidebarControls = SidebarControls;
	var timer = null;
	var Sidebar = React.createClass({
	  displayName: 'Sidebar',

	  getInitialState: function getInitialState() {
	    return {
	      left: this.props.sidebar * 100 + '%',
	      visibility: this.props.sidebar === 0 ? 'visible' : 'hidden'
	    };
	  },
	  handleKeyChange: function handleKeyChange(sidebar) {
	    var _this = this;

	    var newLeft = this.props.sidebar * 100 - sidebar * 100 + '%';
	    this.setState({
	      left: newLeft,
	      visibility: 'visible'
	    }, function () {
	      if (newLeft !== '0%') {
	        setTimeout(function () {
	          _this.setState({ visibility: 'hidden' });
	        }, 300);
	      } else if (newLeft === '0%') {
	        var height = $(React.findDOMNode(_this.refs.innersidebar)).height();
	        if ($('html').hasClass('static')) {
	          $('#body').css('min-height', height + 400);
	        } else {
	          $('#body').css('min-height', '');
	        }
	      }
	    });
	  },
	  updateScrollbar: function updateScrollbar() {
	    if (!Modernizr.touch) {
	      $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('update');
	    }
	  },
	  repositionScrollbar: function repositionScrollbar(child_node, top, height) {
	    clearTimeout(timer);
	    var node = $(React.findDOMNode(this.refs.sidebar));
	    var scrollTo = top - node.offset().top + node.scrollTop();
	    if (node.find(child_node).length) {
	      if (scrollTo > $(window).height() / 2) {
	        this.timer = setTimeout(function () {
	          node.scrollTop(scrollTo - $(window).height() / 2 + 100);
	        }, 15);
	      }
	    }
	    if (!Modernizr.touch) {
	      this.updateScrollbar();
	    }
	  },
	  destroyScrollbar: function destroyScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('destroy');
	  },
	  initializeScrollbar: function initializeScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar({
	      suppressScrollX: true
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:keychange', this.handleKeyChange);
	  },
	  componentDidMount: function componentDidMount() {
	    var _this2 = this;

	    if (!Modernizr.touch) {
	      this.initializeScrollbar();
	    }

	    if (this.props.active) {
	      setTimeout(function () {
	        ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', { sidebar: _this2.props.sidebar });
	        ReactBootstrap.Dispatcher.emit('sidebar:keychange', _this2.props.sidebar);
	      }, 15);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:keychange', this.handleKeyChange);
	  },
	  render: function render() {
	    var props = _extends({
	      style: {
	        left: this.state.left,
	        visibility: this.state.visibility,
	        transition: 'all 0.3s ease',
	        OTransition: 'all 0.3s ease',
	        MsTransition: 'all 0.3s ease',
	        MozTransition: 'all 0.3s ease',
	        WebkitTransition: 'all 0.3s ease'
	      }
	    }, this.props, {
	      className: (0, _classnames2['default'])('sidebar', this.props.className)
	    });

	    return React.createElement(
	      'div',
	      _extends({ ref: 'sidebar' }, props, { children: null }),
	      React.createElement(
	        'div',
	        { ref: 'innersidebar' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.Sidebar = Sidebar;
	var SidebarNavItem = React.createClass({
	  displayName: 'SidebarNavItem',

	  timer: null,
	  mixins: [_reactRouter.Navigation, _reactRouter.State],
	  propTypes: {
	    open: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    autoHeight: React.PropTypes.bool
	  },
	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open || false,
	      active: this.props.active || false,
	      toggleOpen: this.props.open || false,
	      dir: 'left',
	      opposite: false
	    };
	  },
	  emitOpen: function emitOpen(open) {
	    var node = React.findDOMNode(this.refs.node);
	    if (open) {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
	    } else {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
	    }
	  },
	  handleClick: function handleClick(e) {
	    if (!this.props.href) {
	      e.preventDefault();
	      e.stopPropagation();
	    }
	    if (this.props.hasOwnProperty('onClick')) {
	      this.props.onClick();
	    }
	    this.emitOpen();
	  },
	  collapse: function collapse(node, cb) {
	    var _this3 = this;

	    this.setState({
	      toggleOpen: false
	    }, function () {
	      var height = $(node).height();
	      $(node).css('height', height).animate({
	        height: '45px'
	      }, 125, 'easeInOutSine', function () {
	        $(node).css('height', '');
	        try {
	          _this3.setState({
	            open: false,
	            toggleOpen: false
	          }, function () {
	            if (cb) cb();
	          });
	        } catch (e) {}
	      });
	    });
	  },
	  expand: function expand(node, cb) {
	    var _this4 = this;

	    this.setState({
	      toggleOpen: true
	    }, function () {
	      var height = $(node).addClass('open').height();
	      $(node).removeClass('open');
	      $(node).css('height', '45px').animate({
	        height: height
	      }, 125, 'easeInOutSine', function () {
	        $(node).css('height', '');
	        try {
	          _this4.setState({
	            open: true
	          }, function () {
	            if (cb) cb();
	          });
	        } catch (e) {}
	      });
	    });
	  },
	  handleOpenState: function handleOpenState(child_node, open) {
	    var _this5 = this;

	    clearTimeout(this.timer);
	    this.timer = setTimeout(function () {
	      if (_this5.props.children && _this5.isMounted()) {
	        var node = React.findDOMNode(_this5.refs.node);
	        if (open) {
	          if ($(node).find(child_node).length) {
	            _this5.setState({
	              open: true,
	              toggleOpen: true
	            });
	          }
	          return;
	        }
	        if ($(node).is(child_node)) {
	          if (_this5.state.open) {
	            _this5.collapse(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          } else {
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          }
	          return;
	        }
	        if (!$(node).find(child_node).length) {
	          if (_this5.state.open) _this5.collapse(node);
	        }
	      }
	    }, 15);
	  },
	  handleLayoutDirChange: function handleLayoutDirChange(dir) {
	    this.setState({
	      dir: dir === 'ltr' ? 'left' : 'right',
	      opposite: dir === 'ltr' ? false : true
	    });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
	  },
	  activateNavItem: function activateNavItem(props) {
	    var active = props.active || false;
	    var currentLocation = this.context.router.state.location.pathname;

	    if (!active && props.href) {
	      active = this.isActive(props.href) && currentLocation == props.href;
	    }

	    if (active) {
	      this.setState({ active: true });
	      this.emitOpen(true);
	      var node = React.findDOMNode(this.refs.node);
	      var height = $(node).height();
	      var top = $(node).offset().top;
	      setTimeout(function () {
	        ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
	      }, 15);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.activateNavItem(nextProps);
	  },
	  componentDidMount: function componentDidMount() {
	    this.activateNavItem(this.props);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      'open': this.state.open,
	      'active': this.state.active
	    });
	    var toggleClasses = (0, _classnames2['default'])({
	      'toggle-button': true,
	      'open': this.state.toggleOpen,
	      'opposite': this.state.opposite
	    });
	    var icon = null,
	        toggleButton = null;
	    if (this.props.children) {
	      toggleButton = React.createElement(Icon, { className: toggleClasses.trim(), bundle: 'fontello', glyph: this.state.dir + '-open-3' });
	    }
	    if (this.props.glyph || this.props.bundle) {
	      icon = React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph });
	    }
	    var style = { height: this.props.autoHeight ? 'auto' : '' };

	    var props = _extends({
	      name: null,
	      style: style,
	      tabIndex: '-1'
	    }, this.props, {
	      className: classes.trim()
	    });

	    var RouteLink = 'a';
	    var componentProps = {
	      name: null,
	      tabIndex: -1,
	      href: this.props.href || '',
	      onClick: this.handleClick,
	      style: style
	    };

	    if (this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
	      RouteLink = _reactRouter.Link;
	      componentProps.to = this.props.href;
	      delete componentProps.href;
	    }

	    return React.createElement(
	      'li',
	      _extends({ ref: 'node' }, props),
	      React.createElement(
	        RouteLink,
	        componentProps,
	        icon,
	        React.createElement(
	          'span',
	          { className: 'name' },
	          this.props.name
	        ),
	        toggleButton
	      ),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNavItem = SidebarNavItem;
	var SidebarNav = React.createClass({
	  displayName: 'SidebarNav',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-nav', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'ul',
	      _extends({}, props, { children: null }),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNav = SidebarNav;
	var SidebarBtn = React.createClass({
	  displayName: 'SidebarBtn',

	  handleSidebarStateChange: function handleSidebarStateChange(props) {
	    if (props['data-id'] === 'sidebar-btn') {
	      ReactBootstrap.Dispatcher.emit('sidebar');
	    }
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('pull-left visible-xs-inline-block', this.props.className);
	    var props = _extends({}, this.props, {
	      classes: classes
	    });

	    return React.createElement(
	      NavContent,
	      props,
	      React.createElement(
	        Nav,
	        { onItemSelect: this.handleSidebarStateChange },
	        React.createElement(
	          NavItem,
	          { 'data-id': 'sidebar-btn', className: 'sidebar-btn', href: '/' },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'th-list-5' })
	        )
	      )
	    );
	  }
	});
	exports.SidebarBtn = SidebarBtn;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(38);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(39);

	var Brand = (function (_React$Component) {
	  _inherits(Brand, _React$Component);

	  function Brand() {
	    _classCallCheck(this, Brand);

	    _get(Object.getPrototypeOf(Brand.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Brand, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        NavHeader,
	        this.props,
	        React.createElement(
	          NavBrand,
	          { tabIndex: '-1' },
	          React.createElement('img', { src: '/imgs/logo.png', alt: 'rubix', width: '111', height: '28' })
	        )
	      );
	    }
	  }]);

	  return Brand;
	})(React.Component);

	var HeaderNavigation = React.createClass({
	  displayName: 'HeaderNavigation',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  render: function render() {
	    var props = _extends({}, this.props, {
	      className: (0, _classnames2['default'])('pull-right', this.props.className)
	    });

	    return React.createElement(
	      NavContent,
	      props,
	      React.createElement(
	        Nav,
	        null,
	        React.createElement(
	          NavItem,
	          { className: 'logout', href: '#' },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'off-1' })
	        )
	      )
	    );
	  }
	});

	var Header = (function (_React$Component2) {
	  _inherits(Header, _React$Component2);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        _extends({ id: 'navbar' }, this.props),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              NavBar,
	              { fixedTop: true, id: 'rubix-nav-header' },
	              React.createElement(
	                Container,
	                { fluid: true },
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 3, visible: 'xs' },
	                    React.createElement(_globalJsxSidebar_component.SidebarBtn, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 6, sm: 4 },
	                    React.createElement(Brand, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 3, sm: 8 },
	                    React.createElement(HeaderNavigation, null)
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	})(React.Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      version: 0
	    };
	  }

	  _createClass(_default, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'footer-container' },
	        React.createElement(
	          Grid,
	          { id: 'footer', className: 'text-center' },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                null,
	                '© 2014 SketchPixy Creative - v',
	                this.state.version
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _leaflet = __webpack_require__(111);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _types = __webpack_require__(112);

	var _types2 = _interopRequireDefault(_types);

	var _BaseTileLayer = __webpack_require__(116);

	var _BaseTileLayer2 = _interopRequireDefault(_BaseTileLayer);

	var _CanvasTileLayer = __webpack_require__(117);

	var _CanvasTileLayer2 = _interopRequireDefault(_CanvasTileLayer);

	var _Circle = __webpack_require__(118);

	var _Circle2 = _interopRequireDefault(_Circle);

	var _CircleMarker = __webpack_require__(120);

	var _CircleMarker2 = _interopRequireDefault(_CircleMarker);

	var _FeatureGroup = __webpack_require__(121);

	var _FeatureGroup2 = _interopRequireDefault(_FeatureGroup);

	var _GeoJson = __webpack_require__(122);

	var _GeoJson2 = _interopRequireDefault(_GeoJson);

	var _ImageOverlay = __webpack_require__(123);

	var _ImageOverlay2 = _interopRequireDefault(_ImageOverlay);

	var _Map = __webpack_require__(124);

	var _Map2 = _interopRequireDefault(_Map);

	var _MapComponent = __webpack_require__(68);

	var _MapComponent2 = _interopRequireDefault(_MapComponent);

	var _MapLayer = __webpack_require__(43);

	var _MapLayer2 = _interopRequireDefault(_MapLayer);

	var _Marker = __webpack_require__(126);

	var _Marker2 = _interopRequireDefault(_Marker);

	var _MultiPolygon = __webpack_require__(127);

	var _MultiPolygon2 = _interopRequireDefault(_MultiPolygon);

	var _MultiPolyline = __webpack_require__(128);

	var _MultiPolyline2 = _interopRequireDefault(_MultiPolyline);

	var _Polygon = __webpack_require__(129);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _Polyline = __webpack_require__(130);

	var _Polyline2 = _interopRequireDefault(_Polyline);

	var _Popup = __webpack_require__(131);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _PopupContainer = __webpack_require__(119);

	var _PopupContainer2 = _interopRequireDefault(_PopupContainer);

	var _Rectangle = __webpack_require__(132);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _TileLayer = __webpack_require__(133);

	var _TileLayer2 = _interopRequireDefault(_TileLayer);

	var _WMSTileLayer = __webpack_require__(134);

	var _WMSTileLayer2 = _interopRequireDefault(_WMSTileLayer);

	var setIconDefaultImagePath = function setIconDefaultImagePath(path) {
	  _leaflet2['default'].Icon.Default.imagePath = path;
	};

	setIconDefaultImagePath('//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images');

	exports['default'] = {
	  setIconDefaultImagePath: setIconDefaultImagePath,
	  PropTypes: _types2['default'],
	  BaseTileLayer: _BaseTileLayer2['default'],
	  CanvasTileLayer: _CanvasTileLayer2['default'],
	  Circle: _Circle2['default'],
	  CircleMarker: _CircleMarker2['default'],
	  FeatureGroup: _FeatureGroup2['default'],
	  GeoJson: _GeoJson2['default'],
	  ImageOverlay: _ImageOverlay2['default'],
	  Map: _Map2['default'],
	  MapComponent: _MapComponent2['default'],
	  MapLayer: _MapLayer2['default'],
	  Marker: _Marker2['default'],
	  MultiPolygon: _MultiPolygon2['default'],
	  MultiPolyline: _MultiPolyline2['default'],
	  Polygon: _Polygon2['default'],
	  Polyline: _Polyline2['default'],
	  Popup: _Popup2['default'],
	  PopupContainer: _PopupContainer2['default'],
	  Rectangle: _Rectangle2['default'],
	  TileLayer: _TileLayer2['default'],
	  WMSTileLayer: _WMSTileLayer2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodashObjectAssign = __webpack_require__(44);

	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _MapComponent2 = __webpack_require__(68);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	var MapLayer = (function (_MapComponent) {
	  function MapLayer() {
	    _classCallCheck(this, MapLayer);

	    if (_MapComponent != null) {
	      _MapComponent.apply(this, arguments);
	    }
	  }

	  _inherits(MapLayer, _MapComponent);

	  _createClass(MapLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(Object.getPrototypeOf(MapLayer.prototype), 'componentDidMount', this).call(this);
	      this.props.map.addLayer(this.leafletElement);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Object.getPrototypeOf(MapLayer.prototype), 'componentWillUnmount', this).call(this);
	      this.props.map.removeLayer(this.leafletElement);
	    }
	  }, {
	    key: 'getClonedChildrenWithMap',
	    value: function getClonedChildrenWithMap(extra) {
	      var _props = this.props;
	      var children = _props.children;
	      var map = _props.map;

	      var props = (0, _lodashObjectAssign2['default'])({ map: map }, extra);

	      return _react2['default'].Children.map(children, function (child) {
	        return child ? _react2['default'].cloneElement(child, props) : null;
	      });
	    }
	  }]);

	  return MapLayer;
	})(_MapComponent3['default']);

	exports['default'] = MapLayer;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(45),
	    baseAssign = __webpack_require__(61),
	    createAssigner = __webpack_require__(63);

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it is invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});

	module.exports = assign;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(46);

	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	module.exports = assignWith;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(47),
	    isArrayLike = __webpack_require__(52),
	    isObject = __webpack_require__(50),
	    shimKeys = __webpack_require__(56);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(48);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(49),
	    isObjectLike = __webpack_require__(51);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(53),
	    isLength = __webpack_require__(55);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(54);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(57),
	    isArray = __webpack_require__(58),
	    isIndex = __webpack_require__(59),
	    isLength = __webpack_require__(55),
	    keysIn = __webpack_require__(60);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(52),
	    isObjectLike = __webpack_require__(51);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(47),
	    isLength = __webpack_require__(55),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(57),
	    isArray = __webpack_require__(58),
	    isIndex = __webpack_require__(59),
	    isLength = __webpack_require__(55),
	    isObject = __webpack_require__(50);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(62),
	    keys = __webpack_require__(46);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(64),
	    isIterateeCall = __webpack_require__(66),
	    restParam = __webpack_require__(67);

	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(65);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(52),
	    isIndex = __webpack_require__(59),
	    isObject = __webpack_require__(50);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodashLangClone = __webpack_require__(69);

	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);

	var _lodashCollectionForEach = __webpack_require__(81);

	var _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);

	var _lodashCollectionReduce = __webpack_require__(85);

	var _lodashCollectionReduce2 = _interopRequireDefault(_lodashCollectionReduce);

	var _lodashObjectKeys = __webpack_require__(46);

	var _lodashObjectKeys2 = _interopRequireDefault(_lodashObjectKeys);

	var _react = __webpack_require__(5);

	var EVENTS_RE = /on(?:Leaflet)?(.+)/i;

	var MapComponent = (function (_Component) {
	  function MapComponent() {
	    _classCallCheck(this, MapComponent);

	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }

	  _inherits(MapComponent, _Component);

	  _createClass(MapComponent, [{
	    key: 'getLeafletElement',
	    value: function getLeafletElement() {
	      return this.leafletElement;
	    }
	  }, {
	    key: 'extractLeafletEvents',
	    value: function extractLeafletEvents(props) {
	      return (0, _lodashCollectionReduce2['default'])((0, _lodashObjectKeys2['default'])(props), function (res, ev) {
	        if (EVENTS_RE.test(ev)) {
	          var key = ev.replace(EVENTS_RE, function (match, p) {
	            return p.toLowerCase();
	          });
	          res[key] = props[ev];
	        }
	        return res;
	      }, {});
	    }
	  }, {
	    key: 'bindLeafletEvents',
	    value: function bindLeafletEvents() {
	      var next = arguments[0] === undefined ? {} : arguments[0];
	      var prev = arguments[1] === undefined ? {} : arguments[1];

	      var el = this.leafletElement;
	      if (!el) return;

	      var diff = (0, _lodashLangClone2['default'])(prev);
	      (0, _lodashCollectionForEach2['default'])(prev, function (cb, ev) {
	        if (!next[ev] || cb !== next[ev]) {
	          delete diff[ev];
	          el.off(ev, cb);
	        }
	      });

	      (0, _lodashCollectionForEach2['default'])(next, function (cb, ev) {
	        if (!prev[ev] || cb !== prev[ev]) {
	          diff[ev] = cb;
	          el.on(ev, cb);
	        }
	      });

	      return diff;
	    }
	  }, {
	    key: 'fireLeafletEvent',
	    value: function fireLeafletEvent(type, data) {
	      var el = this.leafletElement;
	      if (el) el.fire(type, data);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._leafletEvents = this.extractLeafletEvents(this.props);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.bindLeafletEvents(this._leafletEvents);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var next = this.extractLeafletEvents(nextProps);
	      this._leafletEvents = this.bindLeafletEvents(next, this._leafletEvents);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var el = this.leafletElement;
	      if (!el) return;

	      (0, _lodashCollectionForEach2['default'])(this._leafletEvents, function (cb, ev) {
	        el.off(ev, cb);
	      });
	    }
	  }]);

	  return MapComponent;
	})(_react.Component);

	exports['default'] = MapComponent;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(70),
	    bindCallback = __webpack_require__(64),
	    isIterateeCall = __webpack_require__(66);

	/**
	 * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	 * otherwise they are assigned by reference. If `customizer` is provided it is
	 * invoked to produce the cloned values. If `customizer` returns `undefined`
	 * cloning is handled by the method instead. The `customizer` is bound to
	 * `thisArg` and invoked with two argument; (value [, index|key, object]).
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	 * The enumerable properties of `arguments` objects and objects created by
	 * constructors other than `Object` are cloned to plain `Object` objects. An
	 * empty object is returned for uncloneable values such as functions, DOM nodes,
	 * Maps, Sets, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {*} Returns the cloned value.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * var shallow = _.clone(users);
	 * shallow[0] === users[0];
	 * // => true
	 *
	 * var deep = _.clone(users, true);
	 * deep[0] === users[0];
	 * // => false
	 *
	 * // using a customizer callback
	 * var el = _.clone(document.body, function(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(false);
	 *   }
	 * });
	 *
	 * el === document.body
	 * // => false
	 * el.nodeName
	 * // => BODY
	 * el.childNodes.length;
	 * // => 0
	 */
	function clone(value, isDeep, customizer, thisArg) {
	  if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	    isDeep = false;
	  }
	  else if (typeof isDeep == 'function') {
	    thisArg = customizer;
	    customizer = isDeep;
	    isDeep = false;
	  }
	  return typeof customizer == 'function'
	    ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	    : baseClone(value, isDeep);
	}

	module.exports = clone;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(71),
	    arrayEach = __webpack_require__(72),
	    baseAssign = __webpack_require__(61),
	    baseForOwn = __webpack_require__(73),
	    initCloneArray = __webpack_require__(77),
	    initCloneByTag = __webpack_require__(78),
	    initCloneObject = __webpack_require__(80),
	    isArray = __webpack_require__(58),
	    isObject = __webpack_require__(50);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[stringTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[mapTag] = cloneableTags[setTag] =
	cloneableTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.clone` without support for argument juggling
	 * and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The object `value` belongs to.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates clones with source counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return arrayCopy(value, result);
	    }
	  } else {
	    var tag = objToString.call(value),
	        isFunc = tag == funcTag;

	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return baseAssign(result, value);
	      }
	    } else {
	      return cloneableTags[tag]
	        ? initCloneByTag(value, tag, isDeep)
	        : (object ? value : {});
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == value) {
	      return stackB[length];
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate it with its clone.
	  stackA.push(value);
	  stackB.push(result);

	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = arrayCopy;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(74),
	    keys = __webpack_require__(46);

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(75);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(76);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add array properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var bufferClone = __webpack_require__(79);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return bufferClone(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      var buffer = object.buffer;
	      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      var result = new Ctor(object.source, reFlags.exec(object));
	      result.lastIndex = object.lastIndex;
	  }
	  return result;
	}

	module.exports = initCloneByTag;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Native method references. */
	var ArrayBuffer = global.ArrayBuffer,
	    Uint8Array = global.Uint8Array;

	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	  var result = new ArrayBuffer(buffer.byteLength),
	      view = new Uint8Array(result);

	  view.set(new Uint8Array(buffer));
	  return result;
	}

	module.exports = bufferClone;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	    Ctor = Object;
	  }
	  return new Ctor;
	}

	module.exports = initCloneObject;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(72),
	    baseEach = __webpack_require__(82),
	    createForEach = __webpack_require__(84);

	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	 * (value, index|key, collection). Iteratee functions may exit iteration early
	 * by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	 * may be used for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from left to right and returns the array
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	 *   console.log(n, key);
	 * });
	 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	 */
	var forEach = createForEach(arrayEach, baseEach);

	module.exports = forEach;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(73),
	    createBaseEach = __webpack_require__(83);

	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(53),
	    isLength = __webpack_require__(55),
	    toObject = __webpack_require__(76);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(64),
	    isArray = __webpack_require__(58);

	/**
	 * Creates a function for `_.forEach` or `_.forEachRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createForEach(arrayFunc, eachFunc) {
	  return function(collection, iteratee, thisArg) {
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee)
	      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	  };
	}

	module.exports = createForEach;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(86),
	    baseEach = __webpack_require__(82),
	    createReduce = __webpack_require__(87);

	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` through `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not provided the first element of `collection` is used as the initial
	 * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	 * and `sortByOrder`
	 *
	 * @static
	 * @memberOf _
	 * @alias foldl, inject
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {*} Returns the accumulated value.
	 * @example
	 *
	 * _.reduce([1, 2], function(total, n) {
	 *   return total + n;
	 * });
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	 *   result[key] = n * 3;
	 *   return result;
	 * }, {});
	 * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	 */
	var reduce = createReduce(arrayReduce, baseEach);

	module.exports = reduce;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initFromArray] Specify using the first element of `array`
	 *  as the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initFromArray) {
	  var index = -1,
	      length = array.length;

	  if (initFromArray && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(88),
	    baseReduce = __webpack_require__(110),
	    isArray = __webpack_require__(58);

	/**
	 * Creates a function for `_.reduce` or `_.reduceRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createReduce(arrayFunc, eachFunc) {
	  return function(collection, iteratee, accumulator, thisArg) {
	    var initFromArray = arguments.length < 3;
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	      : baseReduce(collection, baseCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	  };
	}

	module.exports = createReduce;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(89),
	    baseMatchesProperty = __webpack_require__(101),
	    bindCallback = __webpack_require__(64),
	    identity = __webpack_require__(65),
	    property = __webpack_require__(108);

	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}

	module.exports = baseCallback;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(90),
	    getMatchData = __webpack_require__(98),
	    toObject = __webpack_require__(76);

	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(91),
	    toObject = __webpack_require__(76);

	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(92),
	    isObject = __webpack_require__(50),
	    isObjectLike = __webpack_require__(51);

	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}

	module.exports = baseIsEqual;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(93),
	    equalByTag = __webpack_require__(95),
	    equalObjects = __webpack_require__(96),
	    isArray = __webpack_require__(58),
	    isTypedArray = __webpack_require__(97);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(94);

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalArrays;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(46);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalObjects;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(55),
	    isObjectLike = __webpack_require__(51);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(99),
	    pairs = __webpack_require__(100);

	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(46),
	    toObject = __webpack_require__(76);

	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);

	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}

	module.exports = pairs;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(102),
	    baseIsEqual = __webpack_require__(91),
	    baseSlice = __webpack_require__(103),
	    isArray = __webpack_require__(58),
	    isKey = __webpack_require__(104),
	    isStrictComparable = __webpack_require__(99),
	    last = __webpack_require__(105),
	    toObject = __webpack_require__(76),
	    toPath = __webpack_require__(106);

	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');

	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(76);

	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(58),
	    toObject = __webpack_require__(76);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}

	module.exports = isKey;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(107),
	    isArray = __webpack_require__(58);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(54),
	    basePropertyDeep = __webpack_require__(109),
	    isKey = __webpack_require__(104);

	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(102),
	    toPath = __webpack_require__(106);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight` without support
	 * for callback shorthands and `this` binding, which iterates over `collection`
	 * using the provided `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initFromCollection Specify using the first or last element
	 *  of `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initFromCollection
	      ? (initFromCollection = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}

	module.exports = baseReduce;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
	 (c) 2010-2013, Vladimir Agafonkin
	 (c) 2010-2011, CloudMade
	*/
	(function (window, document, undefined) {
	var oldL = window.L,
	    L = {};

	L.version = '0.7.2';

	// define Leaflet for Node module pattern loaders, including Browserify
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = L;

	// define Leaflet as an AMD module
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (L), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// define Leaflet as a global L variable, saving the original L to restore later if needed

	L.noConflict = function () {
		window.L = oldL;
		return this;
	};

	window.L = L;


	/*
	 * L.Util contains various utility functions used throughout Leaflet code.
	 */

	L.Util = {
		extend: function (dest) { // (Object[, Object, ...]) ->
			var sources = Array.prototype.slice.call(arguments, 1),
			    i, j, len, src;

			for (j = 0, len = sources.length; j < len; j++) {
				src = sources[j] || {};
				for (i in src) {
					if (src.hasOwnProperty(i)) {
						dest[i] = src[i];
					}
				}
			}
			return dest;
		},

		bind: function (fn, obj) { // (Function, Object) -> Function
			var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
			return function () {
				return fn.apply(obj, args || arguments);
			};
		},

		stamp: (function () {
			var lastId = 0,
			    key = '_leaflet_id';
			return function (obj) {
				obj[key] = obj[key] || ++lastId;
				return obj[key];
			};
		}()),

		invokeEach: function (obj, method, context) {
			var i, args;

			if (typeof obj === 'object') {
				args = Array.prototype.slice.call(arguments, 3);

				for (i in obj) {
					method.apply(context, [i, obj[i]].concat(args));
				}
				return true;
			}

			return false;
		},

		limitExecByInterval: function (fn, time, context) {
			var lock, execOnUnlock;

			return function wrapperFn() {
				var args = arguments;

				if (lock) {
					execOnUnlock = true;
					return;
				}

				lock = true;

				setTimeout(function () {
					lock = false;

					if (execOnUnlock) {
						wrapperFn.apply(context, args);
						execOnUnlock = false;
					}
				}, time);

				fn.apply(context, args);
			};
		},

		falseFn: function () {
			return false;
		},

		formatNum: function (num, digits) {
			var pow = Math.pow(10, digits || 5);
			return Math.round(num * pow) / pow;
		},

		trim: function (str) {
			return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
		},

		splitWords: function (str) {
			return L.Util.trim(str).split(/\s+/);
		},

		setOptions: function (obj, options) {
			obj.options = L.extend({}, obj.options, options);
			return obj.options;
		},

		getParamString: function (obj, existingUrl, uppercase) {
			var params = [];
			for (var i in obj) {
				params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
			}
			return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
		},
		template: function (str, data) {
			return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
				var value = data[key];
				if (value === undefined) {
					throw new Error('No value provided for variable ' + str);
				} else if (typeof value === 'function') {
					value = value(data);
				}
				return value;
			});
		},

		isArray: Array.isArray || function (obj) {
			return (Object.prototype.toString.call(obj) === '[object Array]');
		},

		emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	};

	(function () {

		// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

		function getPrefixed(name) {
			var i, fn,
			    prefixes = ['webkit', 'moz', 'o', 'ms'];

			for (i = 0; i < prefixes.length && !fn; i++) {
				fn = window[prefixes[i] + name];
			}

			return fn;
		}

		var lastTime = 0;

		function timeoutDefer(fn) {
			var time = +new Date(),
			    timeToCall = Math.max(0, 16 - (time - lastTime));

			lastTime = time + timeToCall;
			return window.setTimeout(fn, timeToCall);
		}

		var requestFn = window.requestAnimationFrame ||
		        getPrefixed('RequestAnimationFrame') || timeoutDefer;

		var cancelFn = window.cancelAnimationFrame ||
		        getPrefixed('CancelAnimationFrame') ||
		        getPrefixed('CancelRequestAnimationFrame') ||
		        function (id) { window.clearTimeout(id); };


		L.Util.requestAnimFrame = function (fn, context, immediate, element) {
			fn = L.bind(fn, context);

			if (immediate && requestFn === timeoutDefer) {
				fn();
			} else {
				return requestFn.call(window, fn, element);
			}
		};

		L.Util.cancelAnimFrame = function (id) {
			if (id) {
				cancelFn.call(window, id);
			}
		};

	}());

	// shortcuts for most used utility functions
	L.extend = L.Util.extend;
	L.bind = L.Util.bind;
	L.stamp = L.Util.stamp;
	L.setOptions = L.Util.setOptions;


	/*
	 * L.Class powers the OOP facilities of the library.
	 * Thanks to John Resig and Dean Edwards for inspiration!
	 */

	L.Class = function () {};

	L.Class.extend = function (props) {

		// extended class with the new prototype
		var NewClass = function () {

			// call the constructor
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}

			// call all constructor hooks
			if (this._initHooks) {
				this.callInitHooks();
			}
		};

		// instantiate class without calling constructor
		var F = function () {};
		F.prototype = this.prototype;

		var proto = new F();
		proto.constructor = NewClass;

		NewClass.prototype = proto;

		//inherit parent's statics
		for (var i in this) {
			if (this.hasOwnProperty(i) && i !== 'prototype') {
				NewClass[i] = this[i];
			}
		}

		// mix static properties into the class
		if (props.statics) {
			L.extend(NewClass, props.statics);
			delete props.statics;
		}

		// mix includes into the prototype
		if (props.includes) {
			L.Util.extend.apply(null, [proto].concat(props.includes));
			delete props.includes;
		}

		// merge options
		if (props.options && proto.options) {
			props.options = L.extend({}, proto.options, props.options);
		}

		// mix given properties into the prototype
		L.extend(proto, props);

		proto._initHooks = [];

		var parent = this;
		// jshint camelcase: false
		NewClass.__super__ = parent.prototype;

		// add method for calling all hooks
		proto.callInitHooks = function () {

			if (this._initHooksCalled) { return; }

			if (parent.prototype.callInitHooks) {
				parent.prototype.callInitHooks.call(this);
			}

			this._initHooksCalled = true;

			for (var i = 0, len = proto._initHooks.length; i < len; i++) {
				proto._initHooks[i].call(this);
			}
		};

		return NewClass;
	};


	// method for adding properties to prototype
	L.Class.include = function (props) {
		L.extend(this.prototype, props);
	};

	// merge new default options to the Class
	L.Class.mergeOptions = function (options) {
		L.extend(this.prototype.options, options);
	};

	// add a constructor hook
	L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
		var args = Array.prototype.slice.call(arguments, 1);

		var init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
	};


	/*
	 * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
	 */

	var eventsKey = '_leaflet_events';

	L.Mixin = {};

	L.Mixin.Events = {

		addEventListener: function (types, fn, context) { // (String, Function[, Object]) or (Object[, Object])

			// types can be a map of types/handlers
			if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) { return this; }

			var events = this[eventsKey] = this[eventsKey] || {},
			    contextId = context && context !== this && L.stamp(context),
			    i, len, event, type, indexKey, indexLenKey, typeIndex;

			// types can be a string of space-separated words
			types = L.Util.splitWords(types);

			for (i = 0, len = types.length; i < len; i++) {
				event = {
					action: fn,
					context: context || this
				};
				type = types[i];

				if (contextId) {
					// store listeners of a particular context in a separate hash (if it has an id)
					// gives a major performance boost when removing thousands of map layers

					indexKey = type + '_idx';
					indexLenKey = indexKey + '_len';

					typeIndex = events[indexKey] = events[indexKey] || {};

					if (!typeIndex[contextId]) {
						typeIndex[contextId] = [];

						// keep track of the number of keys in the index to quickly check if it's empty
						events[indexLenKey] = (events[indexLenKey] || 0) + 1;
					}

					typeIndex[contextId].push(event);


				} else {
					events[type] = events[type] || [];
					events[type].push(event);
				}
			}

			return this;
		},

		hasEventListeners: function (type) { // (String) -> Boolean
			var events = this[eventsKey];
			return !!events && ((type in events && events[type].length > 0) ||
			                    (type + '_idx' in events && events[type + '_idx_len'] > 0));
		},

		removeEventListener: function (types, fn, context) { // ([String, Function, Object]) or (Object[, Object])

			if (!this[eventsKey]) {
				return this;
			}

			if (!types) {
				return this.clearAllEventListeners();
			}

			if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) { return this; }

			var events = this[eventsKey],
			    contextId = context && context !== this && L.stamp(context),
			    i, len, type, listeners, j, indexKey, indexLenKey, typeIndex, removed;

			types = L.Util.splitWords(types);

			for (i = 0, len = types.length; i < len; i++) {
				type = types[i];
				indexKey = type + '_idx';
				indexLenKey = indexKey + '_len';

				typeIndex = events[indexKey];

				if (!fn) {
					// clear all listeners for a type if function isn't specified
					delete events[type];
					delete events[indexKey];
					delete events[indexLenKey];

				} else {
					listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

					if (listeners) {
						for (j = listeners.length - 1; j >= 0; j--) {
							if ((listeners[j].action === fn) && (!context || (listeners[j].context === context))) {
								removed = listeners.splice(j, 1);
								// set the old action to a no-op, because it is possible
								// that the listener is being iterated over as part of a dispatch
								removed[0].action = L.Util.falseFn;
							}
						}

						if (context && typeIndex && (listeners.length === 0)) {
							delete typeIndex[contextId];
							events[indexLenKey]--;
						}
					}
				}
			}

			return this;
		},

		clearAllEventListeners: function () {
			delete this[eventsKey];
			return this;
		},

		fireEvent: function (type, data) { // (String[, Object])
			if (!this.hasEventListeners(type)) {
				return this;
			}

			var event = L.Util.extend({}, data, { type: type, target: this });

			var events = this[eventsKey],
			    listeners, i, len, typeIndex, contextId;

			if (events[type]) {
				// make sure adding/removing listeners inside other listeners won't cause infinite loop
				listeners = events[type].slice();

				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].action.call(listeners[i].context, event);
				}
			}

			// fire event for the context-indexed listeners as well
			typeIndex = events[type + '_idx'];

			for (contextId in typeIndex) {
				listeners = typeIndex[contextId].slice();

				if (listeners) {
					for (i = 0, len = listeners.length; i < len; i++) {
						listeners[i].action.call(listeners[i].context, event);
					}
				}
			}

			return this;
		},

		addOneTimeEventListener: function (types, fn, context) {

			if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) { return this; }

			var handler = L.bind(function () {
				this
				    .removeEventListener(types, fn, context)
				    .removeEventListener(types, handler, context);
			}, this);

			return this
			    .addEventListener(types, fn, context)
			    .addEventListener(types, handler, context);
		}
	};

	L.Mixin.Events.on = L.Mixin.Events.addEventListener;
	L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
	L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
	L.Mixin.Events.fire = L.Mixin.Events.fireEvent;


	/*
	 * L.Browser handles different browser and feature detections for internal Leaflet use.
	 */

	(function () {

		var ie = 'ActiveXObject' in window,
			ielt9 = ie && !document.addEventListener,

		    // terrible browser detection to work around Safari / iOS / Android browser bugs
		    ua = navigator.userAgent.toLowerCase(),
		    webkit = ua.indexOf('webkit') !== -1,
		    chrome = ua.indexOf('chrome') !== -1,
		    phantomjs = ua.indexOf('phantom') !== -1,
		    android = ua.indexOf('android') !== -1,
		    android23 = ua.search('android [23]') !== -1,
			gecko = ua.indexOf('gecko') !== -1,

		    mobile = typeof orientation !== undefined + '',
		    msPointer = window.navigator && window.navigator.msPointerEnabled &&
		              window.navigator.msMaxTouchPoints && !window.PointerEvent,
			pointer = (window.PointerEvent && window.navigator.pointerEnabled && window.navigator.maxTouchPoints) ||
					  msPointer,
		    retina = ('devicePixelRatio' in window && window.devicePixelRatio > 1) ||
		             ('matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') &&
		              window.matchMedia('(min-resolution:144dpi)').matches),

		    doc = document.documentElement,
		    ie3d = ie && ('transition' in doc.style),
		    webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
		    gecko3d = 'MozPerspective' in doc.style,
		    opera3d = 'OTransition' in doc.style,
		    any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs;


		// PhantomJS has 'ontouchstart' in document.documentElement, but doesn't actually support touch.
		// https://github.com/Leaflet/Leaflet/pull/1434#issuecomment-13843151

		var touch = !window.L_NO_TOUCH && !phantomjs && (function () {

			var startName = 'ontouchstart';

			// IE10+ (We simulate these into touch* events in L.DomEvent and L.DomEvent.Pointer) or WebKit, etc.
			if (pointer || (startName in doc)) {
				return true;
			}

			// Firefox/Gecko
			var div = document.createElement('div'),
			    supported = false;

			if (!div.setAttribute) {
				return false;
			}
			div.setAttribute(startName, 'return;');

			if (typeof div[startName] === 'function') {
				supported = true;
			}

			div.removeAttribute(startName);
			div = null;

			return supported;
		}());


		L.Browser = {
			ie: ie,
			ielt9: ielt9,
			webkit: webkit,
			gecko: gecko && !webkit && !window.opera && !ie,

			android: android,
			android23: android23,

			chrome: chrome,

			ie3d: ie3d,
			webkit3d: webkit3d,
			gecko3d: gecko3d,
			opera3d: opera3d,
			any3d: any3d,

			mobile: mobile,
			mobileWebkit: mobile && webkit,
			mobileWebkit3d: mobile && webkit3d,
			mobileOpera: mobile && window.opera,

			touch: touch,
			msPointer: msPointer,
			pointer: pointer,

			retina: retina
		};

	}());


	/*
	 * L.Point represents a point with x and y coordinates.
	 */

	L.Point = function (/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
		this.x = (round ? Math.round(x) : x);
		this.y = (round ? Math.round(y) : y);
	};

	L.Point.prototype = {

		clone: function () {
			return new L.Point(this.x, this.y);
		},

		// non-destructive, returns a new point
		add: function (point) {
			return this.clone()._add(L.point(point));
		},

		// destructive, used directly for performance in situations where it's safe to modify existing point
		_add: function (point) {
			this.x += point.x;
			this.y += point.y;
			return this;
		},

		subtract: function (point) {
			return this.clone()._subtract(L.point(point));
		},

		_subtract: function (point) {
			this.x -= point.x;
			this.y -= point.y;
			return this;
		},

		divideBy: function (num) {
			return this.clone()._divideBy(num);
		},

		_divideBy: function (num) {
			this.x /= num;
			this.y /= num;
			return this;
		},

		multiplyBy: function (num) {
			return this.clone()._multiplyBy(num);
		},

		_multiplyBy: function (num) {
			this.x *= num;
			this.y *= num;
			return this;
		},

		round: function () {
			return this.clone()._round();
		},

		_round: function () {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		},

		floor: function () {
			return this.clone()._floor();
		},

		_floor: function () {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		},

		distanceTo: function (point) {
			point = L.point(point);

			var x = point.x - this.x,
			    y = point.y - this.y;

			return Math.sqrt(x * x + y * y);
		},

		equals: function (point) {
			point = L.point(point);

			return point.x === this.x &&
			       point.y === this.y;
		},

		contains: function (point) {
			point = L.point(point);

			return Math.abs(point.x) <= Math.abs(this.x) &&
			       Math.abs(point.y) <= Math.abs(this.y);
		},

		toString: function () {
			return 'Point(' +
			        L.Util.formatNum(this.x) + ', ' +
			        L.Util.formatNum(this.y) + ')';
		}
	};

	L.point = function (x, y, round) {
		if (x instanceof L.Point) {
			return x;
		}
		if (L.Util.isArray(x)) {
			return new L.Point(x[0], x[1]);
		}
		if (x === undefined || x === null) {
			return x;
		}
		return new L.Point(x, y, round);
	};


	/*
	 * L.Bounds represents a rectangular area on the screen in pixel coordinates.
	 */

	L.Bounds = function (a, b) { //(Point, Point) or Point[]
		if (!a) { return; }

		var points = b ? [a, b] : a;

		for (var i = 0, len = points.length; i < len; i++) {
			this.extend(points[i]);
		}
	};

	L.Bounds.prototype = {
		// extend the bounds to contain the given point
		extend: function (point) { // (Point)
			point = L.point(point);

			if (!this.min && !this.max) {
				this.min = point.clone();
				this.max = point.clone();
			} else {
				this.min.x = Math.min(point.x, this.min.x);
				this.max.x = Math.max(point.x, this.max.x);
				this.min.y = Math.min(point.y, this.min.y);
				this.max.y = Math.max(point.y, this.max.y);
			}
			return this;
		},

		getCenter: function (round) { // (Boolean) -> Point
			return new L.Point(
			        (this.min.x + this.max.x) / 2,
			        (this.min.y + this.max.y) / 2, round);
		},

		getBottomLeft: function () { // -> Point
			return new L.Point(this.min.x, this.max.y);
		},

		getTopRight: function () { // -> Point
			return new L.Point(this.max.x, this.min.y);
		},

		getSize: function () {
			return this.max.subtract(this.min);
		},

		contains: function (obj) { // (Bounds) or (Point) -> Boolean
			var min, max;

			if (typeof obj[0] === 'number' || obj instanceof L.Point) {
				obj = L.point(obj);
			} else {
				obj = L.bounds(obj);
			}

			if (obj instanceof L.Bounds) {
				min = obj.min;
				max = obj.max;
			} else {
				min = max = obj;
			}

			return (min.x >= this.min.x) &&
			       (max.x <= this.max.x) &&
			       (min.y >= this.min.y) &&
			       (max.y <= this.max.y);
		},

		intersects: function (bounds) { // (Bounds) -> Boolean
			bounds = L.bounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
			    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

			return xIntersects && yIntersects;
		},

		isValid: function () {
			return !!(this.min && this.max);
		}
	};

	L.bounds = function (a, b) { // (Bounds) or (Point, Point) or (Point[])
		if (!a || a instanceof L.Bounds) {
			return a;
		}
		return new L.Bounds(a, b);
	};


	/*
	 * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
	 */

	L.Transformation = function (a, b, c, d) {
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
	};

	L.Transformation.prototype = {
		transform: function (point, scale) { // (Point, Number) -> Point
			return this._transform(point.clone(), scale);
		},

		// destructive transform (faster)
		_transform: function (point, scale) {
			scale = scale || 1;
			point.x = scale * (this._a * point.x + this._b);
			point.y = scale * (this._c * point.y + this._d);
			return point;
		},

		untransform: function (point, scale) {
			scale = scale || 1;
			return new L.Point(
			        (point.x / scale - this._b) / this._a,
			        (point.y / scale - this._d) / this._c);
		}
	};


	/*
	 * L.DomUtil contains various utility functions for working with DOM.
	 */

	L.DomUtil = {
		get: function (id) {
			return (typeof id === 'string' ? document.getElementById(id) : id);
		},

		getStyle: function (el, style) {

			var value = el.style[style];

			if (!value && el.currentStyle) {
				value = el.currentStyle[style];
			}

			if ((!value || value === 'auto') && document.defaultView) {
				var css = document.defaultView.getComputedStyle(el, null);
				value = css ? css[style] : null;
			}

			return value === 'auto' ? null : value;
		},

		getViewportOffset: function (element) {

			var top = 0,
			    left = 0,
			    el = element,
			    docBody = document.body,
			    docEl = document.documentElement,
			    pos;

			do {
				top  += el.offsetTop  || 0;
				left += el.offsetLeft || 0;

				//add borders
				top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
				left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;

				pos = L.DomUtil.getStyle(el, 'position');

				if (el.offsetParent === docBody && pos === 'absolute') { break; }

				if (pos === 'fixed') {
					top  += docBody.scrollTop  || docEl.scrollTop  || 0;
					left += docBody.scrollLeft || docEl.scrollLeft || 0;
					break;
				}

				if (pos === 'relative' && !el.offsetLeft) {
					var width = L.DomUtil.getStyle(el, 'width'),
					    maxWidth = L.DomUtil.getStyle(el, 'max-width'),
					    r = el.getBoundingClientRect();

					if (width !== 'none' || maxWidth !== 'none') {
						left += r.left + el.clientLeft;
					}

					//calculate full y offset since we're breaking out of the loop
					top += r.top + (docBody.scrollTop  || docEl.scrollTop  || 0);

					break;
				}

				el = el.offsetParent;

			} while (el);

			el = element;

			do {
				if (el === docBody) { break; }

				top  -= el.scrollTop  || 0;
				left -= el.scrollLeft || 0;

				el = el.parentNode;
			} while (el);

			return new L.Point(left, top);
		},

		documentIsLtr: function () {
			if (!L.DomUtil._docIsLtrCached) {
				L.DomUtil._docIsLtrCached = true;
				L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
			}
			return L.DomUtil._docIsLtr;
		},

		create: function (tagName, className, container) {

			var el = document.createElement(tagName);
			el.className = className;

			if (container) {
				container.appendChild(el);
			}

			return el;
		},

		hasClass: function (el, name) {
			if (el.classList !== undefined) {
				return el.classList.contains(name);
			}
			var className = L.DomUtil._getClass(el);
			return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
		},

		addClass: function (el, name) {
			if (el.classList !== undefined) {
				var classes = L.Util.splitWords(name);
				for (var i = 0, len = classes.length; i < len; i++) {
					el.classList.add(classes[i]);
				}
			} else if (!L.DomUtil.hasClass(el, name)) {
				var className = L.DomUtil._getClass(el);
				L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
			}
		},

		removeClass: function (el, name) {
			if (el.classList !== undefined) {
				el.classList.remove(name);
			} else {
				L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
			}
		},

		_setClass: function (el, name) {
			if (el.className.baseVal === undefined) {
				el.className = name;
			} else {
				// in case of SVG element
				el.className.baseVal = name;
			}
		},

		_getClass: function (el) {
			return el.className.baseVal === undefined ? el.className : el.className.baseVal;
		},

		setOpacity: function (el, value) {

			if ('opacity' in el.style) {
				el.style.opacity = value;

			} else if ('filter' in el.style) {

				var filter = false,
				    filterName = 'DXImageTransform.Microsoft.Alpha';

				// filters collection throws an error if we try to retrieve a filter that doesn't exist
				try {
					filter = el.filters.item(filterName);
				} catch (e) {
					// don't set opacity to 1 if we haven't already set an opacity,
					// it isn't needed and breaks transparent pngs.
					if (value === 1) { return; }
				}

				value = Math.round(value * 100);

				if (filter) {
					filter.Enabled = (value !== 100);
					filter.Opacity = value;
				} else {
					el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
				}
			}
		},

		testProp: function (props) {

			var style = document.documentElement.style;

			for (var i = 0; i < props.length; i++) {
				if (props[i] in style) {
					return props[i];
				}
			}
			return false;
		},

		getTranslateString: function (point) {
			// on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
			// makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
			// (same speed either way), Opera 12 doesn't support translate3d

			var is3d = L.Browser.webkit3d,
			    open = 'translate' + (is3d ? '3d' : '') + '(',
			    close = (is3d ? ',0' : '') + ')';

			return open + point.x + 'px,' + point.y + 'px' + close;
		},

		getScaleString: function (scale, origin) {

			var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
			    scaleStr = ' scale(' + scale + ') ';

			return preTranslateStr + scaleStr;
		},

		setPosition: function (el, point, disable3D) { // (HTMLElement, Point[, Boolean])

			// jshint camelcase: false
			el._leaflet_pos = point;

			if (!disable3D && L.Browser.any3d) {
				el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
			} else {
				el.style.left = point.x + 'px';
				el.style.top = point.y + 'px';
			}
		},

		getPosition: function (el) {
			// this method is only used for elements previously positioned using setPosition,
			// so it's safe to cache the position for performance

			// jshint camelcase: false
			return el._leaflet_pos;
		}
	};


	// prefix style property names

	L.DomUtil.TRANSFORM = L.DomUtil.testProp(
	        ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

	// webkitTransition comes first because some browser versions that drop vendor prefix don't do
	// the same for the transitionend event, in particular the Android 4.1 stock browser

	L.DomUtil.TRANSITION = L.DomUtil.testProp(
	        ['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

	L.DomUtil.TRANSITION_END =
	        L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ?
	        L.DomUtil.TRANSITION + 'End' : 'transitionend';

	(function () {
	    if ('onselectstart' in document) {
	        L.extend(L.DomUtil, {
	            disableTextSelection: function () {
	                L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
	            },

	            enableTextSelection: function () {
	                L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
	            }
	        });
	    } else {
	        var userSelectProperty = L.DomUtil.testProp(
	            ['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	        L.extend(L.DomUtil, {
	            disableTextSelection: function () {
	                if (userSelectProperty) {
	                    var style = document.documentElement.style;
	                    this._userSelect = style[userSelectProperty];
	                    style[userSelectProperty] = 'none';
	                }
	            },

	            enableTextSelection: function () {
	                if (userSelectProperty) {
	                    document.documentElement.style[userSelectProperty] = this._userSelect;
	                    delete this._userSelect;
	                }
	            }
	        });
	    }

		L.extend(L.DomUtil, {
			disableImageDrag: function () {
				L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
			},

			enableImageDrag: function () {
				L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
			}
		});
	})();


	/*
	 * L.LatLng represents a geographical point with latitude and longitude coordinates.
	 */

	L.LatLng = function (lat, lng, alt) { // (Number, Number, Number)
		lat = parseFloat(lat);
		lng = parseFloat(lng);

		if (isNaN(lat) || isNaN(lng)) {
			throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
		}

		this.lat = lat;
		this.lng = lng;

		if (alt !== undefined) {
			this.alt = parseFloat(alt);
		}
	};

	L.extend(L.LatLng, {
		DEG_TO_RAD: Math.PI / 180,
		RAD_TO_DEG: 180 / Math.PI,
		MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
	});

	L.LatLng.prototype = {
		equals: function (obj) { // (LatLng) -> Boolean
			if (!obj) { return false; }

			obj = L.latLng(obj);

			var margin = Math.max(
			        Math.abs(this.lat - obj.lat),
			        Math.abs(this.lng - obj.lng));

			return margin <= L.LatLng.MAX_MARGIN;
		},

		toString: function (precision) { // (Number) -> String
			return 'LatLng(' +
			        L.Util.formatNum(this.lat, precision) + ', ' +
			        L.Util.formatNum(this.lng, precision) + ')';
		},

		// Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
		// TODO move to projection code, LatLng shouldn't know about Earth
		distanceTo: function (other) { // (LatLng) -> Number
			other = L.latLng(other);

			var R = 6378137, // earth radius in meters
			    d2r = L.LatLng.DEG_TO_RAD,
			    dLat = (other.lat - this.lat) * d2r,
			    dLon = (other.lng - this.lng) * d2r,
			    lat1 = this.lat * d2r,
			    lat2 = other.lat * d2r,
			    sin1 = Math.sin(dLat / 2),
			    sin2 = Math.sin(dLon / 2);

			var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);

			return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		},

		wrap: function (a, b) { // (Number, Number) -> LatLng
			var lng = this.lng;

			a = a || -180;
			b = b ||  180;

			lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);

			return new L.LatLng(this.lat, lng);
		}
	};

	L.latLng = function (a, b) { // (LatLng) or ([Number, Number]) or (Number, Number)
		if (a instanceof L.LatLng) {
			return a;
		}
		if (L.Util.isArray(a)) {
			if (typeof a[0] === 'number' || typeof a[0] === 'string') {
				return new L.LatLng(a[0], a[1], a[2]);
			} else {
				return null;
			}
		}
		if (a === undefined || a === null) {
			return a;
		}
		if (typeof a === 'object' && 'lat' in a) {
			return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
		}
		if (b === undefined) {
			return null;
		}
		return new L.LatLng(a, b);
	};



	/*
	 * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
	 */

	L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
		if (!southWest) { return; }

		var latlngs = northEast ? [southWest, northEast] : southWest;

		for (var i = 0, len = latlngs.length; i < len; i++) {
			this.extend(latlngs[i]);
		}
	};

	L.LatLngBounds.prototype = {
		// extend the bounds to contain the given point or bounds
		extend: function (obj) { // (LatLng) or (LatLngBounds)
			if (!obj) { return this; }

			var latLng = L.latLng(obj);
			if (latLng !== null) {
				obj = latLng;
			} else {
				obj = L.latLngBounds(obj);
			}

			if (obj instanceof L.LatLng) {
				if (!this._southWest && !this._northEast) {
					this._southWest = new L.LatLng(obj.lat, obj.lng);
					this._northEast = new L.LatLng(obj.lat, obj.lng);
				} else {
					this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
					this._southWest.lng = Math.min(obj.lng, this._southWest.lng);

					this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
					this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
				}
			} else if (obj instanceof L.LatLngBounds) {
				this.extend(obj._southWest);
				this.extend(obj._northEast);
			}
			return this;
		},

		// extend the bounds by a percentage
		pad: function (bufferRatio) { // (Number) -> LatLngBounds
			var sw = this._southWest,
			    ne = this._northEast,
			    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
			    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

			return new L.LatLngBounds(
			        new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
			        new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
		},

		getCenter: function () { // -> LatLng
			return new L.LatLng(
			        (this._southWest.lat + this._northEast.lat) / 2,
			        (this._southWest.lng + this._northEast.lng) / 2);
		},

		getSouthWest: function () {
			return this._southWest;
		},

		getNorthEast: function () {
			return this._northEast;
		},

		getNorthWest: function () {
			return new L.LatLng(this.getNorth(), this.getWest());
		},

		getSouthEast: function () {
			return new L.LatLng(this.getSouth(), this.getEast());
		},

		getWest: function () {
			return this._southWest.lng;
		},

		getSouth: function () {
			return this._southWest.lat;
		},

		getEast: function () {
			return this._northEast.lng;
		},

		getNorth: function () {
			return this._northEast.lat;
		},

		contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
			if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
				obj = L.latLng(obj);
			} else {
				obj = L.latLngBounds(obj);
			}

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof L.LatLngBounds) {
				sw2 = obj.getSouthWest();
				ne2 = obj.getNorthEast();
			} else {
				sw2 = ne2 = obj;
			}

			return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
			       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
		},

		intersects: function (bounds) { // (LatLngBounds)
			bounds = L.latLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
			    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

			return latIntersects && lngIntersects;
		},

		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
		},

		equals: function (bounds) { // (LatLngBounds)
			if (!bounds) { return false; }

			bounds = L.latLngBounds(bounds);

			return this._southWest.equals(bounds.getSouthWest()) &&
			       this._northEast.equals(bounds.getNorthEast());
		},

		isValid: function () {
			return !!(this._southWest && this._northEast);
		}
	};

	//TODO International date line?

	L.latLngBounds = function (a, b) { // (LatLngBounds) or (LatLng, LatLng)
		if (!a || a instanceof L.LatLngBounds) {
			return a;
		}
		return new L.LatLngBounds(a, b);
	};


	/*
	 * L.Projection contains various geographical projections used by CRS classes.
	 */

	L.Projection = {};


	/*
	 * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
	 */

	L.Projection.SphericalMercator = {
		MAX_LATITUDE: 85.0511287798,

		project: function (latlng) { // (LatLng) -> Point
			var d = L.LatLng.DEG_TO_RAD,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    x = latlng.lng * d,
			    y = lat * d;

			y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

			return new L.Point(x, y);
		},

		unproject: function (point) { // (Point, Boolean) -> LatLng
			var d = L.LatLng.RAD_TO_DEG,
			    lng = point.x * d,
			    lat = (2 * Math.atan(Math.exp(point.y)) - (Math.PI / 2)) * d;

			return new L.LatLng(lat, lng);
		}
	};


	/*
	 * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
	 */

	L.Projection.LonLat = {
		project: function (latlng) {
			return new L.Point(latlng.lng, latlng.lat);
		},

		unproject: function (point) {
			return new L.LatLng(point.y, point.x);
		}
	};


	/*
	 * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
	 */

	L.CRS = {
		latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
			var projectedPoint = this.projection.project(latlng),
			    scale = this.scale(zoom);

			return this.transformation._transform(projectedPoint, scale);
		},

		pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
			var scale = this.scale(zoom),
			    untransformedPoint = this.transformation.untransform(point, scale);

			return this.projection.unproject(untransformedPoint);
		},

		project: function (latlng) {
			return this.projection.project(latlng);
		},

		scale: function (zoom) {
			return 256 * Math.pow(2, zoom);
		},

		getSize: function (zoom) {
			var s = this.scale(zoom);
			return L.point(s, s);
		}
	};


	/*
	 * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
	 */

	L.CRS.Simple = L.extend({}, L.CRS, {
		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1, 0, -1, 0),

		scale: function (zoom) {
			return Math.pow(2, zoom);
		}
	});


	/*
	 * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
	 * and is used by Leaflet by default.
	 */

	L.CRS.EPSG3857 = L.extend({}, L.CRS, {
		code: 'EPSG:3857',

		projection: L.Projection.SphericalMercator,
		transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),

		project: function (latlng) { // (LatLng) -> Point
			var projectedPoint = this.projection.project(latlng),
			    earthRadius = 6378137;
			return projectedPoint.multiplyBy(earthRadius);
		}
	});

	L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
		code: 'EPSG:900913'
	});


	/*
	 * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
	 */

	L.CRS.EPSG4326 = L.extend({}, L.CRS, {
		code: 'EPSG:4326',

		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
	});


	/*
	 * L.Map is the central class of the API - it is used to create a map.
	 */

	L.Map = L.Class.extend({

		includes: L.Mixin.Events,

		options: {
			crs: L.CRS.EPSG3857,

			/*
			center: LatLng,
			zoom: Number,
			layers: Array,
			*/

			fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
			trackResize: true,
			markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
		},

		initialize: function (id, options) { // (HTMLElement or String, Object)
			options = L.setOptions(this, options);


			this._initContainer(id);
			this._initLayout();

			// hack for https://github.com/Leaflet/Leaflet/issues/1980
			this._onResize = L.bind(this._onResize, this);

			this._initEvents();

			if (options.maxBounds) {
				this.setMaxBounds(options.maxBounds);
			}

			if (options.center && options.zoom !== undefined) {
				this.setView(L.latLng(options.center), options.zoom, {reset: true});
			}

			this._handlers = [];

			this._layers = {};
			this._zoomBoundLayers = {};
			this._tileLayersNum = 0;

			this.callInitHooks();

			this._addLayers(options.layers);
		},


		// public methods that modify map state

		// replaced by animation-powered implementation in Map.PanAnimation.js
		setView: function (center, zoom) {
			zoom = zoom === undefined ? this.getZoom() : zoom;
			this._resetView(L.latLng(center), this._limitZoom(zoom));
			return this;
		},

		setZoom: function (zoom, options) {
			if (!this._loaded) {
				this._zoom = this._limitZoom(zoom);
				return this;
			}
			return this.setView(this.getCenter(), zoom, {zoom: options});
		},

		zoomIn: function (delta, options) {
			return this.setZoom(this._zoom + (delta || 1), options);
		},

		zoomOut: function (delta, options) {
			return this.setZoom(this._zoom - (delta || 1), options);
		},

		setZoomAround: function (latlng, zoom, options) {
			var scale = this.getZoomScale(zoom),
			    viewHalf = this.getSize().divideBy(2),
			    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

			    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
			    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

			return this.setView(newCenter, zoom, {zoom: options});
		},

		fitBounds: function (bounds, options) {

			options = options || {};
			bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

			var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
			    paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

			    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR)),
			    paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

			    swPoint = this.project(bounds.getSouthWest(), zoom),
			    nePoint = this.project(bounds.getNorthEast(), zoom),
			    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

			zoom = options && options.maxZoom ? Math.min(options.maxZoom, zoom) : zoom;

			return this.setView(center, zoom, options);
		},

		fitWorld: function (options) {
			return this.fitBounds([[-90, -180], [90, 180]], options);
		},

		panTo: function (center, options) { // (LatLng)
			return this.setView(center, this._zoom, {pan: options});
		},

		panBy: function (offset) { // (Point)
			// replaced with animated panBy in Map.PanAnimation.js
			this.fire('movestart');

			this._rawPanBy(L.point(offset));

			this.fire('move');
			return this.fire('moveend');
		},

		setMaxBounds: function (bounds) {
			bounds = L.latLngBounds(bounds);

			this.options.maxBounds = bounds;

			if (!bounds) {
				return this.off('moveend', this._panInsideMaxBounds, this);
			}

			if (this._loaded) {
				this._panInsideMaxBounds();
			}

			return this.on('moveend', this._panInsideMaxBounds, this);
		},

		panInsideBounds: function (bounds, options) {
			var center = this.getCenter(),
				newCenter = this._limitCenter(center, this._zoom, bounds);

			if (center.equals(newCenter)) { return this; }

			return this.panTo(newCenter, options);
		},

		addLayer: function (layer) {
			// TODO method is too big, refactor

			var id = L.stamp(layer);

			if (this._layers[id]) { return this; }

			this._layers[id] = layer;

			// TODO getMaxZoom, getMinZoom in ILayer (instead of options)
			if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
				this._zoomBoundLayers[id] = layer;
				this._updateZoomLevels();
			}

			// TODO looks ugly, refactor!!!
			if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
				this._tileLayersNum++;
				this._tileLayersToLoad++;
				layer.on('load', this._onTileLayerLoad, this);
			}

			if (this._loaded) {
				this._layerAdd(layer);
			}

			return this;
		},

		removeLayer: function (layer) {
			var id = L.stamp(layer);

			if (!this._layers[id]) { return this; }

			if (this._loaded) {
				layer.onRemove(this);
			}

			delete this._layers[id];

			if (this._loaded) {
				this.fire('layerremove', {layer: layer});
			}

			if (this._zoomBoundLayers[id]) {
				delete this._zoomBoundLayers[id];
				this._updateZoomLevels();
			}

			// TODO looks ugly, refactor
			if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
				this._tileLayersNum--;
				this._tileLayersToLoad--;
				layer.off('load', this._onTileLayerLoad, this);
			}

			return this;
		},

		hasLayer: function (layer) {
			if (!layer) { return false; }

			return (L.stamp(layer) in this._layers);
		},

		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		invalidateSize: function (options) {
			if (!this._loaded) { return this; }

			options = L.extend({
				animate: false,
				pan: true
			}, options === true ? {animate: true} : options);

			var oldSize = this.getSize();
			this._sizeChanged = true;
			this._initialCenter = null;

			var newSize = this.getSize(),
			    oldCenter = oldSize.divideBy(2).round(),
			    newCenter = newSize.divideBy(2).round(),
			    offset = oldCenter.subtract(newCenter);

			if (!offset.x && !offset.y) { return this; }

			if (options.animate && options.pan) {
				this.panBy(offset);

			} else {
				if (options.pan) {
					this._rawPanBy(offset);
				}

				this.fire('move');

				if (options.debounceMoveend) {
					clearTimeout(this._sizeTimer);
					this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
				} else {
					this.fire('moveend');
				}
			}

			return this.fire('resize', {
				oldSize: oldSize,
				newSize: newSize
			});
		},

		// TODO handler.addTo
		addHandler: function (name, HandlerClass) {
			if (!HandlerClass) { return this; }

			var handler = this[name] = new HandlerClass(this);

			this._handlers.push(handler);

			if (this.options[name]) {
				handler.enable();
			}

			return this;
		},

		remove: function () {
			if (this._loaded) {
				this.fire('unload');
			}

			this._initEvents('off');

			try {
				// throws error in IE6-8
				delete this._container._leaflet;
			} catch (e) {
				this._container._leaflet = undefined;
			}

			this._clearPanes();
			if (this._clearControlPos) {
				this._clearControlPos();
			}

			this._clearHandlers();

			return this;
		},


		// public methods for getting map state

		getCenter: function () { // (Boolean) -> LatLng
			this._checkIfLoaded();

			if (this._initialCenter && !this._moved()) {
				return this._initialCenter;
			}
			return this.layerPointToLatLng(this._getCenterLayerPoint());
		},

		getZoom: function () {
			return this._zoom;
		},

		getBounds: function () {
			var bounds = this.getPixelBounds(),
			    sw = this.unproject(bounds.getBottomLeft()),
			    ne = this.unproject(bounds.getTopRight());

			return new L.LatLngBounds(sw, ne);
		},

		getMinZoom: function () {
			return this.options.minZoom === undefined ?
				(this._layersMinZoom === undefined ? 0 : this._layersMinZoom) :
				this.options.minZoom;
		},

		getMaxZoom: function () {
			return this.options.maxZoom === undefined ?
				(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
				this.options.maxZoom;
		},

		getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
			bounds = L.latLngBounds(bounds);

			var zoom = this.getMinZoom() - (inside ? 1 : 0),
			    maxZoom = this.getMaxZoom(),
			    size = this.getSize(),

			    nw = bounds.getNorthWest(),
			    se = bounds.getSouthEast(),

			    zoomNotFound = true,
			    boundsSize;

			padding = L.point(padding || [0, 0]);

			do {
				zoom++;
				boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
				zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;

			} while (zoomNotFound && zoom <= maxZoom);

			if (zoomNotFound && inside) {
				return null;
			}

			return inside ? zoom : zoom - 1;
		},

		getSize: function () {
			if (!this._size || this._sizeChanged) {
				this._size = new L.Point(
					this._container.clientWidth,
					this._container.clientHeight);

				this._sizeChanged = false;
			}
			return this._size.clone();
		},

		getPixelBounds: function () {
			var topLeftPoint = this._getTopLeftPoint();
			return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
		},

		getPixelOrigin: function () {
			this._checkIfLoaded();
			return this._initialTopLeftPoint;
		},

		getPanes: function () {
			return this._panes;
		},

		getContainer: function () {
			return this._container;
		},


		// TODO replace with universal implementation after refactoring projections

		getZoomScale: function (toZoom) {
			var crs = this.options.crs;
			return crs.scale(toZoom) / crs.scale(this._zoom);
		},

		getScaleZoom: function (scale) {
			return this._zoom + (Math.log(scale) / Math.LN2);
		},


		// conversion methods

		project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
		},

		unproject: function (point, zoom) { // (Point[, Number]) -> LatLng
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.pointToLatLng(L.point(point), zoom);
		},

		layerPointToLatLng: function (point) { // (Point)
			var projectedPoint = L.point(point).add(this.getPixelOrigin());
			return this.unproject(projectedPoint);
		},

		latLngToLayerPoint: function (latlng) { // (LatLng)
			var projectedPoint = this.project(L.latLng(latlng))._round();
			return projectedPoint._subtract(this.getPixelOrigin());
		},

		containerPointToLayerPoint: function (point) { // (Point)
			return L.point(point).subtract(this._getMapPanePos());
		},

		layerPointToContainerPoint: function (point) { // (Point)
			return L.point(point).add(this._getMapPanePos());
		},

		containerPointToLatLng: function (point) {
			var layerPoint = this.containerPointToLayerPoint(L.point(point));
			return this.layerPointToLatLng(layerPoint);
		},

		latLngToContainerPoint: function (latlng) {
			return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
		},

		mouseEventToContainerPoint: function (e) { // (MouseEvent)
			return L.DomEvent.getMousePosition(e, this._container);
		},

		mouseEventToLayerPoint: function (e) { // (MouseEvent)
			return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
		},

		mouseEventToLatLng: function (e) { // (MouseEvent)
			return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
		},


		// map initialization methods

		_initContainer: function (id) {
			var container = this._container = L.DomUtil.get(id);

			if (!container) {
				throw new Error('Map container not found.');
			} else if (container._leaflet) {
				throw new Error('Map container is already initialized.');
			}

			container._leaflet = true;
		},

		_initLayout: function () {
			var container = this._container;

			L.DomUtil.addClass(container, 'leaflet-container' +
				(L.Browser.touch ? ' leaflet-touch' : '') +
				(L.Browser.retina ? ' leaflet-retina' : '') +
				(L.Browser.ielt9 ? ' leaflet-oldie' : '') +
				(this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));

			var position = L.DomUtil.getStyle(container, 'position');

			if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
				container.style.position = 'relative';
			}

			this._initPanes();

			if (this._initControlPos) {
				this._initControlPos();
			}
		},

		_initPanes: function () {
			var panes = this._panes = {};

			this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);

			this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
			panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
			panes.shadowPane = this._createPane('leaflet-shadow-pane');
			panes.overlayPane = this._createPane('leaflet-overlay-pane');
			panes.markerPane = this._createPane('leaflet-marker-pane');
			panes.popupPane = this._createPane('leaflet-popup-pane');

			var zoomHide = ' leaflet-zoom-hide';

			if (!this.options.markerZoomAnimation) {
				L.DomUtil.addClass(panes.markerPane, zoomHide);
				L.DomUtil.addClass(panes.shadowPane, zoomHide);
				L.DomUtil.addClass(panes.popupPane, zoomHide);
			}
		},

		_createPane: function (className, container) {
			return L.DomUtil.create('div', className, container || this._panes.objectsPane);
		},

		_clearPanes: function () {
			this._container.removeChild(this._mapPane);
		},

		_addLayers: function (layers) {
			layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

			for (var i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		},


		// private methods that modify map state

		_resetView: function (center, zoom, preserveMapOffset, afterZoomAnim) {

			var zoomChanged = (this._zoom !== zoom);

			if (!afterZoomAnim) {
				this.fire('movestart');

				if (zoomChanged) {
					this.fire('zoomstart');
				}
			}

			this._zoom = zoom;
			this._initialCenter = center;

			this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

			if (!preserveMapOffset) {
				L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
			} else {
				this._initialTopLeftPoint._add(this._getMapPanePos());
			}

			this._tileLayersToLoad = this._tileLayersNum;

			var loading = !this._loaded;
			this._loaded = true;

			this.fire('viewreset', {hard: !preserveMapOffset});

			if (loading) {
				this.fire('load');
				this.eachLayer(this._layerAdd, this);
			}

			this.fire('move');

			if (zoomChanged || afterZoomAnim) {
				this.fire('zoomend');
			}

			this.fire('moveend', {hard: !preserveMapOffset});
		},

		_rawPanBy: function (offset) {
			L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
		},

		_getZoomSpan: function () {
			return this.getMaxZoom() - this.getMinZoom();
		},

		_updateZoomLevels: function () {
			var i,
				minZoom = Infinity,
				maxZoom = -Infinity,
				oldZoomSpan = this._getZoomSpan();

			for (i in this._zoomBoundLayers) {
				var layer = this._zoomBoundLayers[i];
				if (!isNaN(layer.options.minZoom)) {
					minZoom = Math.min(minZoom, layer.options.minZoom);
				}
				if (!isNaN(layer.options.maxZoom)) {
					maxZoom = Math.max(maxZoom, layer.options.maxZoom);
				}
			}

			if (i === undefined) { // we have no tilelayers
				this._layersMaxZoom = this._layersMinZoom = undefined;
			} else {
				this._layersMaxZoom = maxZoom;
				this._layersMinZoom = minZoom;
			}

			if (oldZoomSpan !== this._getZoomSpan()) {
				this.fire('zoomlevelschange');
			}
		},

		_panInsideMaxBounds: function () {
			this.panInsideBounds(this.options.maxBounds);
		},

		_checkIfLoaded: function () {
			if (!this._loaded) {
				throw new Error('Set map center and zoom first.');
			}
		},

		// map events

		_initEvents: function (onOff) {
			if (!L.DomEvent) { return; }

			onOff = onOff || 'on';

			L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);

			var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter',
			              'mouseleave', 'mousemove', 'contextmenu'],
			    i, len;

			for (i = 0, len = events.length; i < len; i++) {
				L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
			}

			if (this.options.trackResize) {
				L.DomEvent[onOff](window, 'resize', this._onResize, this);
			}
		},

		_onResize: function () {
			L.Util.cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = L.Util.requestAnimFrame(
			        function () { this.invalidateSize({debounceMoveend: true}); }, this, false, this._container);
		},

		_onMouseClick: function (e) {
			if (!this._loaded || (!e._simulated &&
			        ((this.dragging && this.dragging.moved()) ||
			         (this.boxZoom  && this.boxZoom.moved()))) ||
			            L.DomEvent._skipped(e)) { return; }

			this.fire('preclick');
			this._fireMouseEvent(e);
		},

		_fireMouseEvent: function (e) {
			if (!this._loaded || L.DomEvent._skipped(e)) { return; }

			var type = e.type;

			type = (type === 'mouseenter' ? 'mouseover' : (type === 'mouseleave' ? 'mouseout' : type));

			if (!this.hasEventListeners(type)) { return; }

			if (type === 'contextmenu') {
				L.DomEvent.preventDefault(e);
			}

			var containerPoint = this.mouseEventToContainerPoint(e),
			    layerPoint = this.containerPointToLayerPoint(containerPoint),
			    latlng = this.layerPointToLatLng(layerPoint);

			this.fire(type, {
				latlng: latlng,
				layerPoint: layerPoint,
				containerPoint: containerPoint,
				originalEvent: e
			});
		},

		_onTileLayerLoad: function () {
			this._tileLayersToLoad--;
			if (this._tileLayersNum && !this._tileLayersToLoad) {
				this.fire('tilelayersload');
			}
		},

		_clearHandlers: function () {
			for (var i = 0, len = this._handlers.length; i < len; i++) {
				this._handlers[i].disable();
			}
		},

		whenReady: function (callback, context) {
			if (this._loaded) {
				callback.call(context || this, this);
			} else {
				this.on('load', callback, context);
			}
			return this;
		},

		_layerAdd: function (layer) {
			layer.onAdd(this);
			this.fire('layeradd', {layer: layer});
		},


		// private methods for getting map state

		_getMapPanePos: function () {
			return L.DomUtil.getPosition(this._mapPane);
		},

		_moved: function () {
			var pos = this._getMapPanePos();
			return pos && !pos.equals([0, 0]);
		},

		_getTopLeftPoint: function () {
			return this.getPixelOrigin().subtract(this._getMapPanePos());
		},

		_getNewTopLeftPoint: function (center, zoom) {
			var viewHalf = this.getSize()._divideBy(2);
			// TODO round on display, not calculation to increase precision?
			return this.project(center, zoom)._subtract(viewHalf)._round();
		},

		_latLngToNewLayerPoint: function (latlng, newZoom, newCenter) {
			var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());
			return this.project(latlng, newZoom)._subtract(topLeft);
		},

		// layer point of the current center
		_getCenterLayerPoint: function () {
			return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
		},

		// offset of the specified place to the current center in pixels
		_getCenterOffset: function (latlng) {
			return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
		},

		// adjust center for view to get inside bounds
		_limitCenter: function (center, zoom, bounds) {

			if (!bounds) { return center; }

			var centerPoint = this.project(center, zoom),
			    viewHalf = this.getSize().divideBy(2),
			    viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

			return this.unproject(centerPoint.add(offset), zoom);
		},

		// adjust offset for view to get inside bounds
		_limitOffset: function (offset, bounds) {
			if (!bounds) { return offset; }

			var viewBounds = this.getPixelBounds(),
			    newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

			return offset.add(this._getBoundsOffset(newBounds, bounds));
		},

		// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
		_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
			var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
			    seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),

			    dx = this._rebound(nwOffset.x, -seOffset.x),
			    dy = this._rebound(nwOffset.y, -seOffset.y);

			return new L.Point(dx, dy);
		},

		_rebound: function (left, right) {
			return left + right > 0 ?
				Math.round(left - right) / 2 :
				Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
		},

		_limitZoom: function (zoom) {
			var min = this.getMinZoom(),
			    max = this.getMaxZoom();

			return Math.max(min, Math.min(max, zoom));
		}
	});

	L.map = function (id, options) {
		return new L.Map(id, options);
	};


	/*
	 * Mercator projection that takes into account that the Earth is not a perfect sphere.
	 * Less popular than spherical mercator; used by projections like EPSG:3395.
	 */

	L.Projection.Mercator = {
		MAX_LATITUDE: 85.0840591556,

		R_MINOR: 6356752.314245179,
		R_MAJOR: 6378137,

		project: function (latlng) { // (LatLng) -> Point
			var d = L.LatLng.DEG_TO_RAD,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    r = this.R_MAJOR,
			    r2 = this.R_MINOR,
			    x = latlng.lng * d * r,
			    y = lat * d,
			    tmp = r2 / r,
			    eccent = Math.sqrt(1.0 - tmp * tmp),
			    con = eccent * Math.sin(y);

			con = Math.pow((1 - con) / (1 + con), eccent * 0.5);

			var ts = Math.tan(0.5 * ((Math.PI * 0.5) - y)) / con;
			y = -r * Math.log(ts);

			return new L.Point(x, y);
		},

		unproject: function (point) { // (Point, Boolean) -> LatLng
			var d = L.LatLng.RAD_TO_DEG,
			    r = this.R_MAJOR,
			    r2 = this.R_MINOR,
			    lng = point.x * d / r,
			    tmp = r2 / r,
			    eccent = Math.sqrt(1 - (tmp * tmp)),
			    ts = Math.exp(- point.y / r),
			    phi = (Math.PI / 2) - 2 * Math.atan(ts),
			    numIter = 15,
			    tol = 1e-7,
			    i = numIter,
			    dphi = 0.1,
			    con;

			while ((Math.abs(dphi) > tol) && (--i > 0)) {
				con = eccent * Math.sin(phi);
				dphi = (Math.PI / 2) - 2 * Math.atan(ts *
				            Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
				phi += dphi;
			}

			return new L.LatLng(phi * d, lng);
		}
	};



	L.CRS.EPSG3395 = L.extend({}, L.CRS, {
		code: 'EPSG:3395',

		projection: L.Projection.Mercator,

		transformation: (function () {
			var m = L.Projection.Mercator,
			    r = m.R_MAJOR,
			    scale = 0.5 / (Math.PI * r);

			return new L.Transformation(scale, 0.5, -scale, 0.5);
		}())
	});


	/*
	 * L.TileLayer is used for standard xyz-numbered tile layers.
	 */

	L.TileLayer = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minZoom: 0,
			maxZoom: 18,
			tileSize: 256,
			subdomains: 'abc',
			errorTileUrl: '',
			attribution: '',
			zoomOffset: 0,
			opacity: 1,
			/*
			maxNativeZoom: null,
			zIndex: null,
			tms: false,
			continuousWorld: false,
			noWrap: false,
			zoomReverse: false,
			detectRetina: false,
			reuseTiles: false,
			bounds: false,
			*/
			unloadInvisibleTiles: L.Browser.mobile,
			updateWhenIdle: L.Browser.mobile
		},

		initialize: function (url, options) {
			options = L.setOptions(this, options);

			// detecting retina displays, adjusting tileSize and zoom levels
			if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

				options.tileSize = Math.floor(options.tileSize / 2);
				options.zoomOffset++;

				if (options.minZoom > 0) {
					options.minZoom--;
				}
				this.options.maxZoom--;
			}

			if (options.bounds) {
				options.bounds = L.latLngBounds(options.bounds);
			}

			this._url = url;

			var subdomains = this.options.subdomains;

			if (typeof subdomains === 'string') {
				this.options.subdomains = subdomains.split('');
			}
		},

		onAdd: function (map) {
			this._map = map;
			this._animated = map._zoomAnimated;

			// create a container div for tiles
			this._initContainer();

			// set up events
			map.on({
				'viewreset': this._reset,
				'moveend': this._update
			}, this);

			if (this._animated) {
				map.on({
					'zoomanim': this._animateZoom,
					'zoomend': this._endZoomAnim
				}, this);
			}

			if (!this.options.updateWhenIdle) {
				this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
				map.on('move', this._limitedUpdate, this);
			}

			this._reset();
			this._update();
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			this._container.parentNode.removeChild(this._container);

			map.off({
				'viewreset': this._reset,
				'moveend': this._update
			}, this);

			if (this._animated) {
				map.off({
					'zoomanim': this._animateZoom,
					'zoomend': this._endZoomAnim
				}, this);
			}

			if (!this.options.updateWhenIdle) {
				map.off('move', this._limitedUpdate, this);
			}

			this._container = null;
			this._map = null;
		},

		bringToFront: function () {
			var pane = this._map._panes.tilePane;

			if (this._container) {
				pane.appendChild(this._container);
				this._setAutoZIndex(pane, Math.max);
			}

			return this;
		},

		bringToBack: function () {
			var pane = this._map._panes.tilePane;

			if (this._container) {
				pane.insertBefore(this._container, pane.firstChild);
				this._setAutoZIndex(pane, Math.min);
			}

			return this;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		getContainer: function () {
			return this._container;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		setZIndex: function (zIndex) {
			this.options.zIndex = zIndex;
			this._updateZIndex();

			return this;
		},

		setUrl: function (url, noRedraw) {
			this._url = url;

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		},

		redraw: function () {
			if (this._map) {
				this._reset({hard: true});
				this._update();
			}
			return this;
		},

		_updateZIndex: function () {
			if (this._container && this.options.zIndex !== undefined) {
				this._container.style.zIndex = this.options.zIndex;
			}
		},

		_setAutoZIndex: function (pane, compare) {

			var layers = pane.children,
			    edgeZIndex = -compare(Infinity, -Infinity), // -Infinity for max, Infinity for min
			    zIndex, i, len;

			for (i = 0, len = layers.length; i < len; i++) {

				if (layers[i] !== this._container) {
					zIndex = parseInt(layers[i].style.zIndex, 10);

					if (!isNaN(zIndex)) {
						edgeZIndex = compare(edgeZIndex, zIndex);
					}
				}
			}

			this.options.zIndex = this._container.style.zIndex =
			        (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
		},

		_updateOpacity: function () {
			var i,
			    tiles = this._tiles;

			if (L.Browser.ielt9) {
				for (i in tiles) {
					L.DomUtil.setOpacity(tiles[i], this.options.opacity);
				}
			} else {
				L.DomUtil.setOpacity(this._container, this.options.opacity);
			}
		},

		_initContainer: function () {
			var tilePane = this._map._panes.tilePane;

			if (!this._container) {
				this._container = L.DomUtil.create('div', 'leaflet-layer');

				this._updateZIndex();

				if (this._animated) {
					var className = 'leaflet-tile-container';

					this._bgBuffer = L.DomUtil.create('div', className, this._container);
					this._tileContainer = L.DomUtil.create('div', className, this._container);

				} else {
					this._tileContainer = this._container;
				}

				tilePane.appendChild(this._container);

				if (this.options.opacity < 1) {
					this._updateOpacity();
				}
			}
		},

		_reset: function (e) {
			for (var key in this._tiles) {
				this.fire('tileunload', {tile: this._tiles[key]});
			}

			this._tiles = {};
			this._tilesToLoad = 0;

			if (this.options.reuseTiles) {
				this._unusedTiles = [];
			}

			this._tileContainer.innerHTML = '';

			if (this._animated && e && e.hard) {
				this._clearBgBuffer();
			}

			this._initContainer();
		},

		_getTileSize: function () {
			var map = this._map,
			    zoom = map.getZoom() + this.options.zoomOffset,
			    zoomN = this.options.maxNativeZoom,
			    tileSize = this.options.tileSize;

			if (zoomN && zoom > zoomN) {
				tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
			}

			return tileSize;
		},

		_update: function () {

			if (!this._map) { return; }

			var map = this._map,
			    bounds = map.getPixelBounds(),
			    zoom = map.getZoom(),
			    tileSize = this._getTileSize();

			if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
				return;
			}

			var tileBounds = L.bounds(
			        bounds.min.divideBy(tileSize)._floor(),
			        bounds.max.divideBy(tileSize)._floor());

			this._addTilesFromCenterOut(tileBounds);

			if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
				this._removeOtherTiles(tileBounds);
			}
		},

		_addTilesFromCenterOut: function (bounds) {
			var queue = [],
			    center = bounds.getCenter();

			var j, i, point;

			for (j = bounds.min.y; j <= bounds.max.y; j++) {
				for (i = bounds.min.x; i <= bounds.max.x; i++) {
					point = new L.Point(i, j);

					if (this._tileShouldBeLoaded(point)) {
						queue.push(point);
					}
				}
			}

			var tilesToLoad = queue.length;

			if (tilesToLoad === 0) { return; }

			// load tiles in order of their distance to center
			queue.sort(function (a, b) {
				return a.distanceTo(center) - b.distanceTo(center);
			});

			var fragment = document.createDocumentFragment();

			// if its the first batch of tiles to load
			if (!this._tilesToLoad) {
				this.fire('loading');
			}

			this._tilesToLoad += tilesToLoad;

			for (i = 0; i < tilesToLoad; i++) {
				this._addTile(queue[i], fragment);
			}

			this._tileContainer.appendChild(fragment);
		},

		_tileShouldBeLoaded: function (tilePoint) {
			if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
				return false; // already loaded
			}

			var options = this.options;

			if (!options.continuousWorld) {
				var limit = this._getWrapTileNum();

				// don't load if exceeds world bounds
				if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
					tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
			}

			if (options.bounds) {
				var tileSize = options.tileSize,
				    nwPoint = tilePoint.multiplyBy(tileSize),
				    sePoint = nwPoint.add([tileSize, tileSize]),
				    nw = this._map.unproject(nwPoint),
				    se = this._map.unproject(sePoint);

				// TODO temporary hack, will be removed after refactoring projections
				// https://github.com/Leaflet/Leaflet/issues/1618
				if (!options.continuousWorld && !options.noWrap) {
					nw = nw.wrap();
					se = se.wrap();
				}

				if (!options.bounds.intersects([nw, se])) { return false; }
			}

			return true;
		},

		_removeOtherTiles: function (bounds) {
			var kArr, x, y, key;

			for (key in this._tiles) {
				kArr = key.split(':');
				x = parseInt(kArr[0], 10);
				y = parseInt(kArr[1], 10);

				// remove tile if it's out of bounds
				if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
					this._removeTile(key);
				}
			}
		},

		_removeTile: function (key) {
			var tile = this._tiles[key];

			this.fire('tileunload', {tile: tile, url: tile.src});

			if (this.options.reuseTiles) {
				L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
				this._unusedTiles.push(tile);

			} else if (tile.parentNode === this._tileContainer) {
				this._tileContainer.removeChild(tile);
			}

			// for https://github.com/CloudMade/Leaflet/issues/137
			if (!L.Browser.android) {
				tile.onload = null;
				tile.src = L.Util.emptyImageUrl;
			}

			delete this._tiles[key];
		},

		_addTile: function (tilePoint, container) {
			var tilePos = this._getTilePos(tilePoint);

			// get unused tile - or create a new tile
			var tile = this._getTile();

			/*
			Chrome 20 layouts much faster with top/left (verify with timeline, frames)
			Android 4 browser has display issues with top/left and requires transform instead
			(other browsers don't currently care) - see debug/hacks/jitter.html for an example
			*/
			L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

			this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

			this._loadTile(tile, tilePoint);

			if (tile.parentNode !== this._tileContainer) {
				container.appendChild(tile);
			}
		},

		_getZoomForUrl: function () {

			var options = this.options,
			    zoom = this._map.getZoom();

			if (options.zoomReverse) {
				zoom = options.maxZoom - zoom;
			}

			zoom += options.zoomOffset;

			return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
		},

		_getTilePos: function (tilePoint) {
			var origin = this._map.getPixelOrigin(),
			    tileSize = this._getTileSize();

			return tilePoint.multiplyBy(tileSize).subtract(origin);
		},

		// image-specific code (override to implement e.g. Canvas or SVG tile layer)

		getTileUrl: function (tilePoint) {
			return L.Util.template(this._url, L.extend({
				s: this._getSubdomain(tilePoint),
				z: tilePoint.z,
				x: tilePoint.x,
				y: tilePoint.y
			}, this.options));
		},

		_getWrapTileNum: function () {
			var crs = this._map.options.crs,
			    size = crs.getSize(this._map.getZoom());
			return size.divideBy(this._getTileSize())._floor();
		},

		_adjustTilePoint: function (tilePoint) {

			var limit = this._getWrapTileNum();

			// wrap tile coordinates
			if (!this.options.continuousWorld && !this.options.noWrap) {
				tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
			}

			if (this.options.tms) {
				tilePoint.y = limit.y - tilePoint.y - 1;
			}

			tilePoint.z = this._getZoomForUrl();
		},

		_getSubdomain: function (tilePoint) {
			var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
			return this.options.subdomains[index];
		},

		_getTile: function () {
			if (this.options.reuseTiles && this._unusedTiles.length > 0) {
				var tile = this._unusedTiles.pop();
				this._resetTile(tile);
				return tile;
			}
			return this._createTile();
		},

		// Override if data stored on a tile needs to be cleaned up before reuse
		_resetTile: function (/*tile*/) {},

		_createTile: function () {
			var tile = L.DomUtil.create('img', 'leaflet-tile');
			tile.style.width = tile.style.height = this._getTileSize() + 'px';
			tile.galleryimg = 'no';

			tile.onselectstart = tile.onmousemove = L.Util.falseFn;

			if (L.Browser.ielt9 && this.options.opacity !== undefined) {
				L.DomUtil.setOpacity(tile, this.options.opacity);
			}
			// without this hack, tiles disappear after zoom on Chrome for Android
			// https://github.com/Leaflet/Leaflet/issues/2078
			if (L.Browser.mobileWebkit3d) {
				tile.style.WebkitBackfaceVisibility = 'hidden';
			}
			return tile;
		},

		_loadTile: function (tile, tilePoint) {
			tile._layer  = this;
			tile.onload  = this._tileOnLoad;
			tile.onerror = this._tileOnError;

			this._adjustTilePoint(tilePoint);
			tile.src     = this.getTileUrl(tilePoint);

			this.fire('tileloadstart', {
				tile: tile,
				url: tile.src
			});
		},

		_tileLoaded: function () {
			this._tilesToLoad--;

			if (this._animated) {
				L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
			}

			if (!this._tilesToLoad) {
				this.fire('load');

				if (this._animated) {
					// clear scaled tiles after all new tiles are loaded (for performance)
					clearTimeout(this._clearBgBufferTimer);
					this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
				}
			}
		},

		_tileOnLoad: function () {
			var layer = this._layer;

			//Only if we are loading an actual image
			if (this.src !== L.Util.emptyImageUrl) {
				L.DomUtil.addClass(this, 'leaflet-tile-loaded');

				layer.fire('tileload', {
					tile: this,
					url: this.src
				});
			}

			layer._tileLoaded();
		},

		_tileOnError: function () {
			var layer = this._layer;

			layer.fire('tileerror', {
				tile: this,
				url: this.src
			});

			var newUrl = layer.options.errorTileUrl;
			if (newUrl) {
				this.src = newUrl;
			}

			layer._tileLoaded();
		}
	});

	L.tileLayer = function (url, options) {
		return new L.TileLayer(url, options);
	};


	/*
	 * L.TileLayer.WMS is used for putting WMS tile layers on the map.
	 */

	L.TileLayer.WMS = L.TileLayer.extend({

		defaultWmsParams: {
			service: 'WMS',
			request: 'GetMap',
			version: '1.1.1',
			layers: '',
			styles: '',
			format: 'image/jpeg',
			transparent: false
		},

		initialize: function (url, options) { // (String, Object)

			this._url = url;

			var wmsParams = L.extend({}, this.defaultWmsParams),
			    tileSize = options.tileSize || this.options.tileSize;

			if (options.detectRetina && L.Browser.retina) {
				wmsParams.width = wmsParams.height = tileSize * 2;
			} else {
				wmsParams.width = wmsParams.height = tileSize;
			}

			for (var i in options) {
				// all keys that are not TileLayer options go to WMS params
				if (!this.options.hasOwnProperty(i) && i !== 'crs') {
					wmsParams[i] = options[i];
				}
			}

			this.wmsParams = wmsParams;

			L.setOptions(this, options);
		},

		onAdd: function (map) {

			this._crs = this.options.crs || map.options.crs;

			this._wmsVersion = parseFloat(this.wmsParams.version);

			var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
			this.wmsParams[projectionKey] = this._crs.code;

			L.TileLayer.prototype.onAdd.call(this, map);
		},

		getTileUrl: function (tilePoint) { // (Point, Number) -> String

			var map = this._map,
			    tileSize = this.options.tileSize,

			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),

			    nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
			    se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
			    bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
			        [se.y, nw.x, nw.y, se.x].join(',') :
			        [nw.x, se.y, se.x, nw.y].join(','),

			    url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});

			return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
		},

		setParams: function (params, noRedraw) {

			L.extend(this.wmsParams, params);

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		}
	});

	L.tileLayer.wms = function (url, options) {
		return new L.TileLayer.WMS(url, options);
	};


	/*
	 * L.TileLayer.Canvas is a class that you can use as a base for creating
	 * dynamically drawn Canvas-based tile layers.
	 */

	L.TileLayer.Canvas = L.TileLayer.extend({
		options: {
			async: false
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		redraw: function () {
			if (this._map) {
				this._reset({hard: true});
				this._update();
			}

			for (var i in this._tiles) {
				this._redrawTile(this._tiles[i]);
			}
			return this;
		},

		_redrawTile: function (tile) {
			this.drawTile(tile, tile._tilePoint, this._map._zoom);
		},

		_createTile: function () {
			var tile = L.DomUtil.create('canvas', 'leaflet-tile');
			tile.width = tile.height = this.options.tileSize;
			tile.onselectstart = tile.onmousemove = L.Util.falseFn;
			return tile;
		},

		_loadTile: function (tile, tilePoint) {
			tile._layer = this;
			tile._tilePoint = tilePoint;

			this._redrawTile(tile);

			if (!this.options.async) {
				this.tileDrawn(tile);
			}
		},

		drawTile: function (/*tile, tilePoint*/) {
			// override with rendering code
		},

		tileDrawn: function (tile) {
			this._tileOnLoad.call(tile);
		}
	});


	L.tileLayer.canvas = function (options) {
		return new L.TileLayer.Canvas(options);
	};


	/*
	 * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
	 */

	L.ImageOverlay = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			opacity: 1
		},

		initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
			this._url = url;
			this._bounds = L.latLngBounds(bounds);

			L.setOptions(this, options);
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._image) {
				this._initImage();
			}

			map._panes.overlayPane.appendChild(this._image);

			map.on('viewreset', this._reset, this);

			if (map.options.zoomAnimation && L.Browser.any3d) {
				map.on('zoomanim', this._animateZoom, this);
			}

			this._reset();
		},

		onRemove: function (map) {
			map.getPanes().overlayPane.removeChild(this._image);

			map.off('viewreset', this._reset, this);

			if (map.options.zoomAnimation) {
				map.off('zoomanim', this._animateZoom, this);
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			this._updateOpacity();
			return this;
		},

		// TODO remove bringToFront/bringToBack duplication from TileLayer/Path
		bringToFront: function () {
			if (this._image) {
				this._map._panes.overlayPane.appendChild(this._image);
			}
			return this;
		},

		bringToBack: function () {
			var pane = this._map._panes.overlayPane;
			if (this._image) {
				pane.insertBefore(this._image, pane.firstChild);
			}
			return this;
		},

		setUrl: function (url) {
			this._url = url;
			this._image.src = this._url;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		_initImage: function () {
			this._image = L.DomUtil.create('img', 'leaflet-image-layer');

			if (this._map.options.zoomAnimation && L.Browser.any3d) {
				L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
			} else {
				L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
			}

			this._updateOpacity();

			//TODO createImage util method to remove duplication
			L.extend(this._image, {
				galleryimg: 'no',
				onselectstart: L.Util.falseFn,
				onmousemove: L.Util.falseFn,
				onload: L.bind(this._onImageLoad, this),
				src: this._url
			});
		},

		_animateZoom: function (e) {
			var map = this._map,
			    image = this._image,
			    scale = map.getZoomScale(e.zoom),
			    nw = this._bounds.getNorthWest(),
			    se = this._bounds.getSouthEast(),

			    topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
			    size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
			    origin = topLeft._add(size._multiplyBy((1 / 2) * (1 - 1 / scale)));

			image.style[L.DomUtil.TRANSFORM] =
			        L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
		},

		_reset: function () {
			var image   = this._image,
			    topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
			    size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);

			L.DomUtil.setPosition(image, topLeft);

			image.style.width  = size.x + 'px';
			image.style.height = size.y + 'px';
		},

		_onImageLoad: function () {
			this.fire('load');
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._image, this.options.opacity);
		}
	});

	L.imageOverlay = function (url, bounds, options) {
		return new L.ImageOverlay(url, bounds, options);
	};


	/*
	 * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
	 */

	L.Icon = L.Class.extend({
		options: {
			/*
			iconUrl: (String) (required)
			iconRetinaUrl: (String) (optional, used for retina devices if detected)
			iconSize: (Point) (can be set through CSS)
			iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
			popupAnchor: (Point) (if not specified, popup opens in the anchor point)
			shadowUrl: (String) (no shadow by default)
			shadowRetinaUrl: (String) (optional, used for retina devices if detected)
			shadowSize: (Point)
			shadowAnchor: (Point)
			*/
			className: ''
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		createIcon: function (oldIcon) {
			return this._createIcon('icon', oldIcon);
		},

		createShadow: function (oldIcon) {
			return this._createIcon('shadow', oldIcon);
		},

		_createIcon: function (name, oldIcon) {
			var src = this._getIconUrl(name);

			if (!src) {
				if (name === 'icon') {
					throw new Error('iconUrl not set in Icon options (see the docs).');
				}
				return null;
			}

			var img;
			if (!oldIcon || oldIcon.tagName !== 'IMG') {
				img = this._createImg(src);
			} else {
				img = this._createImg(src, oldIcon);
			}
			this._setIconStyles(img, name);

			return img;
		},

		_setIconStyles: function (img, name) {
			var options = this.options,
			    size = L.point(options[name + 'Size']),
			    anchor;

			if (name === 'shadow') {
				anchor = L.point(options.shadowAnchor || options.iconAnchor);
			} else {
				anchor = L.point(options.iconAnchor);
			}

			if (!anchor && size) {
				anchor = size.divideBy(2, true);
			}

			img.className = 'leaflet-marker-' + name + ' ' + options.className;

			if (anchor) {
				img.style.marginLeft = (-anchor.x) + 'px';
				img.style.marginTop  = (-anchor.y) + 'px';
			}

			if (size) {
				img.style.width  = size.x + 'px';
				img.style.height = size.y + 'px';
			}
		},

		_createImg: function (src, el) {
			el = el || document.createElement('img');
			el.src = src;
			return el;
		},

		_getIconUrl: function (name) {
			if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
				return this.options[name + 'RetinaUrl'];
			}
			return this.options[name + 'Url'];
		}
	});

	L.icon = function (options) {
		return new L.Icon(options);
	};


	/*
	 * L.Icon.Default is the blue marker icon used by default in Leaflet.
	 */

	L.Icon.Default = L.Icon.extend({

		options: {
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],

			shadowSize: [41, 41]
		},

		_getIconUrl: function (name) {
			var key = name + 'Url';

			if (this.options[key]) {
				return this.options[key];
			}

			if (L.Browser.retina && name === 'icon') {
				name += '-2x';
			}

			var path = L.Icon.Default.imagePath;

			if (!path) {
				throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
			}

			return path + '/marker-' + name + '.png';
		}
	});

	L.Icon.Default.imagePath = (function () {
		var scripts = document.getElementsByTagName('script'),
		    leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

		var i, len, src, matches, path;

		for (i = 0, len = scripts.length; i < len; i++) {
			src = scripts[i].src;
			matches = src.match(leafletRe);

			if (matches) {
				path = src.split(leafletRe)[0];
				return (path ? path + '/' : '') + 'images';
			}
		}
	}());


	/*
	 * L.Marker is used to display clickable/draggable icons on the map.
	 */

	L.Marker = L.Class.extend({

		includes: L.Mixin.Events,

		options: {
			icon: new L.Icon.Default(),
			title: '',
			alt: '',
			clickable: true,
			draggable: false,
			keyboard: true,
			zIndexOffset: 0,
			opacity: 1,
			riseOnHover: false,
			riseOffset: 250
		},

		initialize: function (latlng, options) {
			L.setOptions(this, options);
			this._latlng = L.latLng(latlng);
		},

		onAdd: function (map) {
			this._map = map;

			map.on('viewreset', this.update, this);

			this._initIcon();
			this.update();
			this.fire('add');

			if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
				map.on('zoomanim', this._animateZoom, this);
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			if (this.dragging) {
				this.dragging.disable();
			}

			this._removeIcon();
			this._removeShadow();

			this.fire('remove');

			map.off({
				'viewreset': this.update,
				'zoomanim': this._animateZoom
			}, this);

			this._map = null;
		},

		getLatLng: function () {
			return this._latlng;
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);

			this.update();

			return this.fire('move', { latlng: this._latlng });
		},

		setZIndexOffset: function (offset) {
			this.options.zIndexOffset = offset;
			this.update();

			return this;
		},

		setIcon: function (icon) {

			this.options.icon = icon;

			if (this._map) {
				this._initIcon();
				this.update();
			}

			if (this._popup) {
				this.bindPopup(this._popup);
			}

			return this;
		},

		update: function () {
			if (this._icon) {
				var pos = this._map.latLngToLayerPoint(this._latlng).round();
				this._setPos(pos);
			}

			return this;
		},

		_initIcon: function () {
			var options = this.options,
			    map = this._map,
			    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
			    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

			var icon = options.icon.createIcon(this._icon),
				addIcon = false;

			// if we're not reusing the icon, remove the old one and init new one
			if (icon !== this._icon) {
				if (this._icon) {
					this._removeIcon();
				}
				addIcon = true;

				if (options.title) {
					icon.title = options.title;
				}
				
				if (options.alt) {
					icon.alt = options.alt;
				}
			}

			L.DomUtil.addClass(icon, classToAdd);

			if (options.keyboard) {
				icon.tabIndex = '0';
			}

			this._icon = icon;

			this._initInteraction();

			if (options.riseOnHover) {
				L.DomEvent
					.on(icon, 'mouseover', this._bringToFront, this)
					.on(icon, 'mouseout', this._resetZIndex, this);
			}

			var newShadow = options.icon.createShadow(this._shadow),
				addShadow = false;

			if (newShadow !== this._shadow) {
				this._removeShadow();
				addShadow = true;
			}

			if (newShadow) {
				L.DomUtil.addClass(newShadow, classToAdd);
			}
			this._shadow = newShadow;


			if (options.opacity < 1) {
				this._updateOpacity();
			}


			var panes = this._map._panes;

			if (addIcon) {
				panes.markerPane.appendChild(this._icon);
			}

			if (newShadow && addShadow) {
				panes.shadowPane.appendChild(this._shadow);
			}
		},

		_removeIcon: function () {
			if (this.options.riseOnHover) {
				L.DomEvent
				    .off(this._icon, 'mouseover', this._bringToFront)
				    .off(this._icon, 'mouseout', this._resetZIndex);
			}

			this._map._panes.markerPane.removeChild(this._icon);

			this._icon = null;
		},

		_removeShadow: function () {
			if (this._shadow) {
				this._map._panes.shadowPane.removeChild(this._shadow);
			}
			this._shadow = null;
		},

		_setPos: function (pos) {
			L.DomUtil.setPosition(this._icon, pos);

			if (this._shadow) {
				L.DomUtil.setPosition(this._shadow, pos);
			}

			this._zIndex = pos.y + this.options.zIndexOffset;

			this._resetZIndex();
		},

		_updateZIndex: function (offset) {
			this._icon.style.zIndex = this._zIndex + offset;
		},

		_animateZoom: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

			this._setPos(pos);
		},

		_initInteraction: function () {

			if (!this.options.clickable) { return; }

			// TODO refactor into something shared with Map/Path/etc. to DRY it up

			var icon = this._icon,
			    events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

			L.DomUtil.addClass(icon, 'leaflet-clickable');
			L.DomEvent.on(icon, 'click', this._onMouseClick, this);
			L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

			for (var i = 0; i < events.length; i++) {
				L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
			}

			if (L.Handler.MarkerDrag) {
				this.dragging = new L.Handler.MarkerDrag(this);

				if (this.options.draggable) {
					this.dragging.enable();
				}
			}
		},

		_onMouseClick: function (e) {
			var wasDragged = this.dragging && this.dragging.moved();

			if (this.hasEventListeners(e.type) || wasDragged) {
				L.DomEvent.stopPropagation(e);
			}

			if (wasDragged) { return; }

			if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) { return; }

			this.fire(e.type, {
				originalEvent: e,
				latlng: this._latlng
			});
		},

		_onKeyPress: function (e) {
			if (e.keyCode === 13) {
				this.fire('click', {
					originalEvent: e,
					latlng: this._latlng
				});
			}
		},

		_fireMouseEvent: function (e) {

			this.fire(e.type, {
				originalEvent: e,
				latlng: this._latlng
			});

			// TODO proper custom event propagation
			// this line will always be called if marker is in a FeatureGroup
			if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
				L.DomEvent.preventDefault(e);
			}
			if (e.type !== 'mousedown') {
				L.DomEvent.stopPropagation(e);
			} else {
				L.DomEvent.preventDefault(e);
			}
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._icon, this.options.opacity);
			if (this._shadow) {
				L.DomUtil.setOpacity(this._shadow, this.options.opacity);
			}
		},

		_bringToFront: function () {
			this._updateZIndex(this.options.riseOffset);
		},

		_resetZIndex: function () {
			this._updateZIndex(0);
		}
	});

	L.marker = function (latlng, options) {
		return new L.Marker(latlng, options);
	};


	/*
	 * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
	 * to use with L.Marker.
	 */

	L.DivIcon = L.Icon.extend({
		options: {
			iconSize: [12, 12], // also can be set through CSS
			/*
			iconAnchor: (Point)
			popupAnchor: (Point)
			html: (String)
			bgPos: (Point)
			*/
			className: 'leaflet-div-icon',
			html: false
		},

		createIcon: function (oldIcon) {
			var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
			    options = this.options;

			if (options.html !== false) {
				div.innerHTML = options.html;
			} else {
				div.innerHTML = '';
			}

			if (options.bgPos) {
				div.style.backgroundPosition =
				        (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
			}

			this._setIconStyles(div, 'icon');
			return div;
		},

		createShadow: function () {
			return null;
		}
	});

	L.divIcon = function (options) {
		return new L.DivIcon(options);
	};


	/*
	 * L.Popup is used for displaying popups on the map.
	 */

	L.Map.mergeOptions({
		closePopupOnClick: true
	});

	L.Popup = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minWidth: 50,
			maxWidth: 300,
			// maxHeight: null,
			autoPan: true,
			closeButton: true,
			offset: [0, 7],
			autoPanPadding: [5, 5],
			// autoPanPaddingTopLeft: null,
			// autoPanPaddingBottomRight: null,
			keepInView: false,
			className: '',
			zoomAnimation: true
		},

		initialize: function (options, source) {
			L.setOptions(this, options);

			this._source = source;
			this._animated = L.Browser.any3d && this.options.zoomAnimation;
			this._isOpen = false;
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._container) {
				this._initLayout();
			}

			var animFade = map.options.fadeAnimation;

			if (animFade) {
				L.DomUtil.setOpacity(this._container, 0);
			}
			map._panes.popupPane.appendChild(this._container);

			map.on(this._getEvents(), this);

			this.update();

			if (animFade) {
				L.DomUtil.setOpacity(this._container, 1);
			}

			this.fire('open');

			map.fire('popupopen', {popup: this});

			if (this._source) {
				this._source.fire('popupopen', {popup: this});
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		openOn: function (map) {
			map.openPopup(this);
			return this;
		},

		onRemove: function (map) {
			map._panes.popupPane.removeChild(this._container);

			L.Util.falseFn(this._container.offsetWidth); // force reflow

			map.off(this._getEvents(), this);

			if (map.options.fadeAnimation) {
				L.DomUtil.setOpacity(this._container, 0);
			}

			this._map = null;

			this.fire('close');

			map.fire('popupclose', {popup: this});

			if (this._source) {
				this._source.fire('popupclose', {popup: this});
			}
		},

		getLatLng: function () {
			return this._latlng;
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			if (this._map) {
				this._updatePosition();
				this._adjustPan();
			}
			return this;
		},

		getContent: function () {
			return this._content;
		},

		setContent: function (content) {
			this._content = content;
			this.update();
			return this;
		},

		update: function () {
			if (!this._map) { return; }

			this._container.style.visibility = 'hidden';

			this._updateContent();
			this._updateLayout();
			this._updatePosition();

			this._container.style.visibility = '';

			this._adjustPan();
		},

		_getEvents: function () {
			var events = {
				viewreset: this._updatePosition
			};

			if (this._animated) {
				events.zoomanim = this._zoomAnimation;
			}
			if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
				events.preclick = this._close;
			}
			if (this.options.keepInView) {
				events.moveend = this._adjustPan;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closePopup(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-popup',
				containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' +
				        (this._animated ? 'animated' : 'hide'),
				container = this._container = L.DomUtil.create('div', containerClass),
				closeButton;

			if (this.options.closeButton) {
				closeButton = this._closeButton =
				        L.DomUtil.create('a', prefix + '-close-button', container);
				closeButton.href = '#close';
				closeButton.innerHTML = '&#215;';
				L.DomEvent.disableClickPropagation(closeButton);

				L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
			}

			var wrapper = this._wrapper =
			        L.DomUtil.create('div', prefix + '-content-wrapper', container);
			L.DomEvent.disableClickPropagation(wrapper);

			this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

			L.DomEvent.disableScrollPropagation(this._contentNode);
			L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

			this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
			this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
		},

		_updateContent: function () {
			if (!this._content) { return; }

			if (typeof this._content === 'string') {
				this._contentNode.innerHTML = this._content;
			} else {
				while (this._contentNode.hasChildNodes()) {
					this._contentNode.removeChild(this._contentNode.firstChild);
				}
				this._contentNode.appendChild(this._content);
			}
			this.fire('contentupdate');
		},

		_updateLayout: function () {
			var container = this._contentNode,
			    style = container.style;

			style.width = '';
			style.whiteSpace = 'nowrap';

			var width = container.offsetWidth;
			width = Math.min(width, this.options.maxWidth);
			width = Math.max(width, this.options.minWidth);

			style.width = (width + 1) + 'px';
			style.whiteSpace = '';

			style.height = '';

			var height = container.offsetHeight,
			    maxHeight = this.options.maxHeight,
			    scrolledClass = 'leaflet-popup-scrolled';

			if (maxHeight && height > maxHeight) {
				style.height = maxHeight + 'px';
				L.DomUtil.addClass(container, scrolledClass);
			} else {
				L.DomUtil.removeClass(container, scrolledClass);
			}

			this._containerWidth = this._container.offsetWidth;
		},

		_updatePosition: function () {
			if (!this._map) { return; }

			var pos = this._map.latLngToLayerPoint(this._latlng),
			    animated = this._animated,
			    offset = L.point(this.options.offset);

			if (animated) {
				L.DomUtil.setPosition(this._container, pos);
			}

			this._containerBottom = -offset.y - (animated ? 0 : pos.y);
			this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x);

			// bottom position the popup in case the height of the popup changes (images loading etc)
			this._container.style.bottom = this._containerBottom + 'px';
			this._container.style.left = this._containerLeft + 'px';
		},

		_zoomAnimation: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);

			L.DomUtil.setPosition(this._container, pos);
		},

		_adjustPan: function () {
			if (!this.options.autoPan) { return; }

			var map = this._map,
			    containerHeight = this._container.offsetHeight,
			    containerWidth = this._containerWidth,

			    layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

			if (this._animated) {
				layerPos._add(L.DomUtil.getPosition(this._container));
			}

			var containerPos = map.layerPointToContainerPoint(layerPos),
			    padding = L.point(this.options.autoPanPadding),
			    paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
			    paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
			    size = map.getSize(),
			    dx = 0,
			    dy = 0;

			if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
				dx = containerPos.x + containerWidth - size.x + paddingBR.x;
			}
			if (containerPos.x - dx - paddingTL.x < 0) { // left
				dx = containerPos.x - paddingTL.x;
			}
			if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
				dy = containerPos.y + containerHeight - size.y + paddingBR.y;
			}
			if (containerPos.y - dy - paddingTL.y < 0) { // top
				dy = containerPos.y - paddingTL.y;
			}

			if (dx || dy) {
				map
				    .fire('autopanstart')
				    .panBy([dx, dy]);
			}
		},

		_onCloseButtonClick: function (e) {
			this._close();
			L.DomEvent.stop(e);
		}
	});

	L.popup = function (options, source) {
		return new L.Popup(options, source);
	};


	L.Map.include({
		openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
			this.closePopup();

			if (!(popup instanceof L.Popup)) {
				var content = popup;

				popup = new L.Popup(options)
				    .setLatLng(latlng)
				    .setContent(content);
			}
			popup._isOpen = true;

			this._popup = popup;
			return this.addLayer(popup);
		},

		closePopup: function (popup) {
			if (!popup || popup === this._popup) {
				popup = this._popup;
				this._popup = null;
			}
			if (popup) {
				this.removeLayer(popup);
				popup._isOpen = false;
			}
			return this;
		}
	});


	/*
	 * Popup extension to L.Marker, adding popup-related methods.
	 */

	L.Marker.include({
		openPopup: function () {
			if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
				this._popup.setLatLng(this._latlng);
				this._map.openPopup(this._popup);
			}

			return this;
		},

		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		togglePopup: function () {
			if (this._popup) {
				if (this._popup._isOpen) {
					this.closePopup();
				} else {
					this.openPopup();
				}
			}
			return this;
		},

		bindPopup: function (content, options) {
			var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);

			anchor = anchor.add(L.Popup.prototype.options.offset);

			if (options && options.offset) {
				anchor = anchor.add(options.offset);
			}

			options = L.extend({offset: anchor}, options);

			if (!this._popupHandlersAdded) {
				this
				    .on('click', this.togglePopup, this)
				    .on('remove', this.closePopup, this)
				    .on('move', this._movePopup, this);
				this._popupHandlersAdded = true;
			}

			if (content instanceof L.Popup) {
				L.setOptions(content, options);
				this._popup = content;
			} else {
				this._popup = new L.Popup(options, this)
					.setContent(content);
			}

			return this;
		},

		setPopupContent: function (content) {
			if (this._popup) {
				this._popup.setContent(content);
			}
			return this;
		},

		unbindPopup: function () {
			if (this._popup) {
				this._popup = null;
				this
				    .off('click', this.togglePopup, this)
				    .off('remove', this.closePopup, this)
				    .off('move', this._movePopup, this);
				this._popupHandlersAdded = false;
			}
			return this;
		},

		getPopup: function () {
			return this._popup;
		},

		_movePopup: function (e) {
			this._popup.setLatLng(e.latlng);
		}
	});


	/*
	 * L.LayerGroup is a class to combine several layers into one so that
	 * you can manipulate the group (e.g. add/remove it) as one layer.
	 */

	L.LayerGroup = L.Class.extend({
		initialize: function (layers) {
			this._layers = {};

			var i, len;

			if (layers) {
				for (i = 0, len = layers.length; i < len; i++) {
					this.addLayer(layers[i]);
				}
			}
		},

		addLayer: function (layer) {
			var id = this.getLayerId(layer);

			this._layers[id] = layer;

			if (this._map) {
				this._map.addLayer(layer);
			}

			return this;
		},

		removeLayer: function (layer) {
			var id = layer in this._layers ? layer : this.getLayerId(layer);

			if (this._map && this._layers[id]) {
				this._map.removeLayer(this._layers[id]);
			}

			delete this._layers[id];

			return this;
		},

		hasLayer: function (layer) {
			if (!layer) { return false; }

			return (layer in this._layers || this.getLayerId(layer) in this._layers);
		},

		clearLayers: function () {
			this.eachLayer(this.removeLayer, this);
			return this;
		},

		invoke: function (methodName) {
			var args = Array.prototype.slice.call(arguments, 1),
			    i, layer;

			for (i in this._layers) {
				layer = this._layers[i];

				if (layer[methodName]) {
					layer[methodName].apply(layer, args);
				}
			}

			return this;
		},

		onAdd: function (map) {
			this._map = map;
			this.eachLayer(map.addLayer, map);
		},

		onRemove: function (map) {
			this.eachLayer(map.removeLayer, map);
			this._map = null;
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		getLayer: function (id) {
			return this._layers[id];
		},

		getLayers: function () {
			var layers = [];

			for (var i in this._layers) {
				layers.push(this._layers[i]);
			}
			return layers;
		},

		setZIndex: function (zIndex) {
			return this.invoke('setZIndex', zIndex);
		},

		getLayerId: function (layer) {
			return L.stamp(layer);
		}
	});

	L.layerGroup = function (layers) {
		return new L.LayerGroup(layers);
	};


	/*
	 * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
	 * shared between a group of interactive layers (like vectors or markers).
	 */

	L.FeatureGroup = L.LayerGroup.extend({
		includes: L.Mixin.Events,

		statics: {
			EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
		},

		addLayer: function (layer) {
			if (this.hasLayer(layer)) {
				return this;
			}

			if ('on' in layer) {
				layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
			}

			L.LayerGroup.prototype.addLayer.call(this, layer);

			if (this._popupContent && layer.bindPopup) {
				layer.bindPopup(this._popupContent, this._popupOptions);
			}

			return this.fire('layeradd', {layer: layer});
		},

		removeLayer: function (layer) {
			if (!this.hasLayer(layer)) {
				return this;
			}
			if (layer in this._layers) {
				layer = this._layers[layer];
			}

			layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);

			L.LayerGroup.prototype.removeLayer.call(this, layer);

			if (this._popupContent) {
				this.invoke('unbindPopup');
			}

			return this.fire('layerremove', {layer: layer});
		},

		bindPopup: function (content, options) {
			this._popupContent = content;
			this._popupOptions = options;
			return this.invoke('bindPopup', content, options);
		},

		openPopup: function (latlng) {
			// open popup on the first layer
			for (var id in this._layers) {
				this._layers[id].openPopup(latlng);
				break;
			}
			return this;
		},

		setStyle: function (style) {
			return this.invoke('setStyle', style);
		},

		bringToFront: function () {
			return this.invoke('bringToFront');
		},

		bringToBack: function () {
			return this.invoke('bringToBack');
		},

		getBounds: function () {
			var bounds = new L.LatLngBounds();

			this.eachLayer(function (layer) {
				bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
			});

			return bounds;
		},

		_propagateEvent: function (e) {
			e = L.extend({
				layer: e.target,
				target: this
			}, e);
			this.fire(e.type, e);
		}
	});

	L.featureGroup = function (layers) {
		return new L.FeatureGroup(layers);
	};


	/*
	 * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
	 */

	L.Path = L.Class.extend({
		includes: [L.Mixin.Events],

		statics: {
			// how much to extend the clip area around the map view
			// (relative to its size, e.g. 0.5 is half the screen in each direction)
			// set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
			CLIP_PADDING: (function () {
				var max = L.Browser.mobile ? 1280 : 2000,
				    target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
				return Math.max(0, Math.min(0.5, target));
			})()
		},

		options: {
			stroke: true,
			color: '#0033ff',
			dashArray: null,
			lineCap: null,
			lineJoin: null,
			weight: 5,
			opacity: 0.5,

			fill: false,
			fillColor: null, //same as color by default
			fillOpacity: 0.2,

			clickable: true
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._container) {
				this._initElements();
				this._initEvents();
			}

			this.projectLatlngs();
			this._updatePath();

			if (this._container) {
				this._map._pathRoot.appendChild(this._container);
			}

			this.fire('add');

			map.on({
				'viewreset': this.projectLatlngs,
				'moveend': this._updatePath
			}, this);
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			map._pathRoot.removeChild(this._container);

			// Need to fire remove event before we set _map to null as the event hooks might need the object
			this.fire('remove');
			this._map = null;

			if (L.Browser.vml) {
				this._container = null;
				this._stroke = null;
				this._fill = null;
			}

			map.off({
				'viewreset': this.projectLatlngs,
				'moveend': this._updatePath
			}, this);
		},

		projectLatlngs: function () {
			// do all projection stuff here
		},

		setStyle: function (style) {
			L.setOptions(this, style);

			if (this._container) {
				this._updateStyle();
			}

			return this;
		},

		redraw: function () {
			if (this._map) {
				this.projectLatlngs();
				this._updatePath();
			}
			return this;
		}
	});

	L.Map.include({
		_updatePathViewport: function () {
			var p = L.Path.CLIP_PADDING,
			    size = this.getSize(),
			    panePos = L.DomUtil.getPosition(this._mapPane),
			    min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
			    max = min.add(size.multiplyBy(1 + p * 2)._round());

			this._pathViewport = new L.Bounds(min, max);
		}
	});


	/*
	 * Extends L.Path with SVG-specific rendering code.
	 */

	L.Path.SVG_NS = 'http://www.w3.org/2000/svg';

	L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);

	L.Path = L.Path.extend({
		statics: {
			SVG: L.Browser.svg
		},

		bringToFront: function () {
			var root = this._map._pathRoot,
			    path = this._container;

			if (path && root.lastChild !== path) {
				root.appendChild(path);
			}
			return this;
		},

		bringToBack: function () {
			var root = this._map._pathRoot,
			    path = this._container,
			    first = root.firstChild;

			if (path && first !== path) {
				root.insertBefore(path, first);
			}
			return this;
		},

		getPathString: function () {
			// form path string here
		},

		_createElement: function (name) {
			return document.createElementNS(L.Path.SVG_NS, name);
		},

		_initElements: function () {
			this._map._initPathRoot();
			this._initPath();
			this._initStyle();
		},

		_initPath: function () {
			this._container = this._createElement('g');

			this._path = this._createElement('path');

			if (this.options.className) {
				L.DomUtil.addClass(this._path, this.options.className);
			}

			this._container.appendChild(this._path);
		},

		_initStyle: function () {
			if (this.options.stroke) {
				this._path.setAttribute('stroke-linejoin', 'round');
				this._path.setAttribute('stroke-linecap', 'round');
			}
			if (this.options.fill) {
				this._path.setAttribute('fill-rule', 'evenodd');
			}
			if (this.options.pointerEvents) {
				this._path.setAttribute('pointer-events', this.options.pointerEvents);
			}
			if (!this.options.clickable && !this.options.pointerEvents) {
				this._path.setAttribute('pointer-events', 'none');
			}
			this._updateStyle();
		},

		_updateStyle: function () {
			if (this.options.stroke) {
				this._path.setAttribute('stroke', this.options.color);
				this._path.setAttribute('stroke-opacity', this.options.opacity);
				this._path.setAttribute('stroke-width', this.options.weight);
				if (this.options.dashArray) {
					this._path.setAttribute('stroke-dasharray', this.options.dashArray);
				} else {
					this._path.removeAttribute('stroke-dasharray');
				}
				if (this.options.lineCap) {
					this._path.setAttribute('stroke-linecap', this.options.lineCap);
				}
				if (this.options.lineJoin) {
					this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
				}
			} else {
				this._path.setAttribute('stroke', 'none');
			}
			if (this.options.fill) {
				this._path.setAttribute('fill', this.options.fillColor || this.options.color);
				this._path.setAttribute('fill-opacity', this.options.fillOpacity);
			} else {
				this._path.setAttribute('fill', 'none');
			}
		},

		_updatePath: function () {
			var str = this.getPathString();
			if (!str) {
				// fix webkit empty string parsing bug
				str = 'M0 0';
			}
			this._path.setAttribute('d', str);
		},

		// TODO remove duplication with L.Map
		_initEvents: function () {
			if (this.options.clickable) {
				if (L.Browser.svg || !L.Browser.vml) {
					L.DomUtil.addClass(this._path, 'leaflet-clickable');
				}

				L.DomEvent.on(this._container, 'click', this._onMouseClick, this);

				var events = ['dblclick', 'mousedown', 'mouseover',
				              'mouseout', 'mousemove', 'contextmenu'];
				for (var i = 0; i < events.length; i++) {
					L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
				}
			}
		},

		_onMouseClick: function (e) {
			if (this._map.dragging && this._map.dragging.moved()) { return; }

			this._fireMouseEvent(e);
		},

		_fireMouseEvent: function (e) {
			if (!this.hasEventListeners(e.type)) { return; }

			var map = this._map,
			    containerPoint = map.mouseEventToContainerPoint(e),
			    layerPoint = map.containerPointToLayerPoint(containerPoint),
			    latlng = map.layerPointToLatLng(layerPoint);

			this.fire(e.type, {
				latlng: latlng,
				layerPoint: layerPoint,
				containerPoint: containerPoint,
				originalEvent: e
			});

			if (e.type === 'contextmenu') {
				L.DomEvent.preventDefault(e);
			}
			if (e.type !== 'mousemove') {
				L.DomEvent.stopPropagation(e);
			}
		}
	});

	L.Map.include({
		_initPathRoot: function () {
			if (!this._pathRoot) {
				this._pathRoot = L.Path.prototype._createElement('svg');
				this._panes.overlayPane.appendChild(this._pathRoot);

				if (this.options.zoomAnimation && L.Browser.any3d) {
					L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');

					this.on({
						'zoomanim': this._animatePathZoom,
						'zoomend': this._endPathZoom
					});
				} else {
					L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
				}

				this.on('moveend', this._updateSvgViewport);
				this._updateSvgViewport();
			}
		},

		_animatePathZoom: function (e) {
			var scale = this.getZoomScale(e.zoom),
			    offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);

			this._pathRoot.style[L.DomUtil.TRANSFORM] =
			        L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';

			this._pathZooming = true;
		},

		_endPathZoom: function () {
			this._pathZooming = false;
		},

		_updateSvgViewport: function () {

			if (this._pathZooming) {
				// Do not update SVGs while a zoom animation is going on otherwise the animation will break.
				// When the zoom animation ends we will be updated again anyway
				// This fixes the case where you do a momentum move and zoom while the move is still ongoing.
				return;
			}

			this._updatePathViewport();

			var vp = this._pathViewport,
			    min = vp.min,
			    max = vp.max,
			    width = max.x - min.x,
			    height = max.y - min.y,
			    root = this._pathRoot,
			    pane = this._panes.overlayPane;

			// Hack to make flicker on drag end on mobile webkit less irritating
			if (L.Browser.mobileWebkit) {
				pane.removeChild(root);
			}

			L.DomUtil.setPosition(root, min);
			root.setAttribute('width', width);
			root.setAttribute('height', height);
			root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

			if (L.Browser.mobileWebkit) {
				pane.appendChild(root);
			}
		}
	});


	/*
	 * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
	 */

	L.Path.include({

		bindPopup: function (content, options) {

			if (content instanceof L.Popup) {
				this._popup = content;
			} else {
				if (!this._popup || options) {
					this._popup = new L.Popup(options, this);
				}
				this._popup.setContent(content);
			}

			if (!this._popupHandlersAdded) {
				this
				    .on('click', this._openPopup, this)
				    .on('remove', this.closePopup, this);

				this._popupHandlersAdded = true;
			}

			return this;
		},

		unbindPopup: function () {
			if (this._popup) {
				this._popup = null;
				this
				    .off('click', this._openPopup)
				    .off('remove', this.closePopup);

				this._popupHandlersAdded = false;
			}
			return this;
		},

		openPopup: function (latlng) {

			if (this._popup) {
				// open the popup from one of the path's points if not specified
				latlng = latlng || this._latlng ||
				         this._latlngs[Math.floor(this._latlngs.length / 2)];

				this._openPopup({latlng: latlng});
			}

			return this;
		},

		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		_openPopup: function (e) {
			this._popup.setLatLng(e.latlng);
			this._map.openPopup(this._popup);
		}
	});


	/*
	 * Vector rendering for IE6-8 through VML.
	 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
	 */

	L.Browser.vml = !L.Browser.svg && (function () {
		try {
			var div = document.createElement('div');
			div.innerHTML = '<v:shape adj="1"/>';

			var shape = div.firstChild;
			shape.style.behavior = 'url(#default#VML)';

			return shape && (typeof shape.adj === 'object');

		} catch (e) {
			return false;
		}
	}());

	L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
		statics: {
			VML: true,
			CLIP_PADDING: 0.02
		},

		_createElement: (function () {
			try {
				document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
				return function (name) {
					return document.createElement('<lvml:' + name + ' class="lvml">');
				};
			} catch (e) {
				return function (name) {
					return document.createElement(
					        '<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
				};
			}
		}()),

		_initPath: function () {
			var container = this._container = this._createElement('shape');

			L.DomUtil.addClass(container, 'leaflet-vml-shape' +
				(this.options.className ? ' ' + this.options.className : ''));

			if (this.options.clickable) {
				L.DomUtil.addClass(container, 'leaflet-clickable');
			}

			container.coordsize = '1 1';

			this._path = this._createElement('path');
			container.appendChild(this._path);

			this._map._pathRoot.appendChild(container);
		},

		_initStyle: function () {
			this._updateStyle();
		},

		_updateStyle: function () {
			var stroke = this._stroke,
			    fill = this._fill,
			    options = this.options,
			    container = this._container;

			container.stroked = options.stroke;
			container.filled = options.fill;

			if (options.stroke) {
				if (!stroke) {
					stroke = this._stroke = this._createElement('stroke');
					stroke.endcap = 'round';
					container.appendChild(stroke);
				}
				stroke.weight = options.weight + 'px';
				stroke.color = options.color;
				stroke.opacity = options.opacity;

				if (options.dashArray) {
					stroke.dashStyle = L.Util.isArray(options.dashArray) ?
					    options.dashArray.join(' ') :
					    options.dashArray.replace(/( *, *)/g, ' ');
				} else {
					stroke.dashStyle = '';
				}
				if (options.lineCap) {
					stroke.endcap = options.lineCap.replace('butt', 'flat');
				}
				if (options.lineJoin) {
					stroke.joinstyle = options.lineJoin;
				}

			} else if (stroke) {
				container.removeChild(stroke);
				this._stroke = null;
			}

			if (options.fill) {
				if (!fill) {
					fill = this._fill = this._createElement('fill');
					container.appendChild(fill);
				}
				fill.color = options.fillColor || options.color;
				fill.opacity = options.fillOpacity;

			} else if (fill) {
				container.removeChild(fill);
				this._fill = null;
			}
		},

		_updatePath: function () {
			var style = this._container.style;

			style.display = 'none';
			this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug
			style.display = '';
		}
	});

	L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
		_initPathRoot: function () {
			if (this._pathRoot) { return; }

			var root = this._pathRoot = document.createElement('div');
			root.className = 'leaflet-vml-container';
			this._panes.overlayPane.appendChild(root);

			this.on('moveend', this._updatePathViewport);
			this._updatePathViewport();
		}
	});


	/*
	 * Vector rendering for all browsers that support canvas.
	 */

	L.Browser.canvas = (function () {
		return !!document.createElement('canvas').getContext;
	}());

	L.Path = (L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? L.Path : L.Path.extend({
		statics: {
			//CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
			CANVAS: true,
			SVG: false
		},

		redraw: function () {
			if (this._map) {
				this.projectLatlngs();
				this._requestUpdate();
			}
			return this;
		},

		setStyle: function (style) {
			L.setOptions(this, style);

			if (this._map) {
				this._updateStyle();
				this._requestUpdate();
			}
			return this;
		},

		onRemove: function (map) {
			map
			    .off('viewreset', this.projectLatlngs, this)
			    .off('moveend', this._updatePath, this);

			if (this.options.clickable) {
				this._map.off('click', this._onClick, this);
				this._map.off('mousemove', this._onMouseMove, this);
			}

			this._requestUpdate();
			
			this.fire('remove');
			this._map = null;
		},

		_requestUpdate: function () {
			if (this._map && !L.Path._updateRequest) {
				L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
			}
		},

		_fireMapMoveEnd: function () {
			L.Path._updateRequest = null;
			this.fire('moveend');
		},

		_initElements: function () {
			this._map._initPathRoot();
			this._ctx = this._map._canvasCtx;
		},

		_updateStyle: function () {
			var options = this.options;

			if (options.stroke) {
				this._ctx.lineWidth = options.weight;
				this._ctx.strokeStyle = options.color;
			}
			if (options.fill) {
				this._ctx.fillStyle = options.fillColor || options.color;
			}
		},

		_drawPath: function () {
			var i, j, len, len2, point, drawMethod;

			this._ctx.beginPath();

			for (i = 0, len = this._parts.length; i < len; i++) {
				for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
					point = this._parts[i][j];
					drawMethod = (j === 0 ? 'move' : 'line') + 'To';

					this._ctx[drawMethod](point.x, point.y);
				}
				// TODO refactor ugly hack
				if (this instanceof L.Polygon) {
					this._ctx.closePath();
				}
			}
		},

		_checkIfEmpty: function () {
			return !this._parts.length;
		},

		_updatePath: function () {
			if (this._checkIfEmpty()) { return; }

			var ctx = this._ctx,
			    options = this.options;

			this._drawPath();
			ctx.save();
			this._updateStyle();

			if (options.fill) {
				ctx.globalAlpha = options.fillOpacity;
				ctx.fill();
			}

			if (options.stroke) {
				ctx.globalAlpha = options.opacity;
				ctx.stroke();
			}

			ctx.restore();

			// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
		},

		_initEvents: function () {
			if (this.options.clickable) {
				// TODO dblclick
				this._map.on('mousemove', this._onMouseMove, this);
				this._map.on('click', this._onClick, this);
			}
		},

		_onClick: function (e) {
			if (this._containsPoint(e.layerPoint)) {
				this.fire('click', e);
			}
		},

		_onMouseMove: function (e) {
			if (!this._map || this._map._animatingZoom) { return; }

			// TODO don't do on each move
			if (this._containsPoint(e.layerPoint)) {
				this._ctx.canvas.style.cursor = 'pointer';
				this._mouseInside = true;
				this.fire('mouseover', e);

			} else if (this._mouseInside) {
				this._ctx.canvas.style.cursor = '';
				this._mouseInside = false;
				this.fire('mouseout', e);
			}
		}
	});

	L.Map.include((L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? {} : {
		_initPathRoot: function () {
			var root = this._pathRoot,
			    ctx;

			if (!root) {
				root = this._pathRoot = document.createElement('canvas');
				root.style.position = 'absolute';
				ctx = this._canvasCtx = root.getContext('2d');

				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';

				this._panes.overlayPane.appendChild(root);

				if (this.options.zoomAnimation) {
					this._pathRoot.className = 'leaflet-zoom-animated';
					this.on('zoomanim', this._animatePathZoom);
					this.on('zoomend', this._endPathZoom);
				}
				this.on('moveend', this._updateCanvasViewport);
				this._updateCanvasViewport();
			}
		},

		_updateCanvasViewport: function () {
			// don't redraw while zooming. See _updateSvgViewport for more details
			if (this._pathZooming) { return; }
			this._updatePathViewport();

			var vp = this._pathViewport,
			    min = vp.min,
			    size = vp.max.subtract(min),
			    root = this._pathRoot;

			//TODO check if this works properly on mobile webkit
			L.DomUtil.setPosition(root, min);
			root.width = size.x;
			root.height = size.y;
			root.getContext('2d').translate(-min.x, -min.y);
		}
	});


	/*
	 * L.LineUtil contains different utility functions for line segments
	 * and polylines (clipping, simplification, distances, etc.)
	 */

	/*jshint bitwise:false */ // allow bitwise operations for this file

	L.LineUtil = {

		// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
		// Improves rendering performance dramatically by lessening the number of points to draw.

		simplify: function (/*Point[]*/ points, /*Number*/ tolerance) {
			if (!tolerance || !points.length) {
				return points.slice();
			}

			var sqTolerance = tolerance * tolerance;

			// stage 1: vertex reduction
			points = this._reducePoints(points, sqTolerance);

			// stage 2: Douglas-Peucker simplification
			points = this._simplifyDP(points, sqTolerance);

			return points;
		},

		// distance from a point to a segment between two points
		pointToSegmentDistance:  function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
			return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
		},

		closestPointOnSegment: function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
			return this._sqClosestPointOnSegment(p, p1, p2);
		},

		// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
		_simplifyDP: function (points, sqTolerance) {

			var len = points.length,
			    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
			    markers = new ArrayConstructor(len);

			markers[0] = markers[len - 1] = 1;

			this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

			var i,
			    newPoints = [];

			for (i = 0; i < len; i++) {
				if (markers[i]) {
					newPoints.push(points[i]);
				}
			}

			return newPoints;
		},

		_simplifyDPStep: function (points, markers, sqTolerance, first, last) {

			var maxSqDist = 0,
			    index, i, sqDist;

			for (i = first + 1; i <= last - 1; i++) {
				sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

				if (sqDist > maxSqDist) {
					index = i;
					maxSqDist = sqDist;
				}
			}

			if (maxSqDist > sqTolerance) {
				markers[index] = 1;

				this._simplifyDPStep(points, markers, sqTolerance, first, index);
				this._simplifyDPStep(points, markers, sqTolerance, index, last);
			}
		},

		// reduce points that are too close to each other to a single point
		_reducePoints: function (points, sqTolerance) {
			var reducedPoints = [points[0]];

			for (var i = 1, prev = 0, len = points.length; i < len; i++) {
				if (this._sqDist(points[i], points[prev]) > sqTolerance) {
					reducedPoints.push(points[i]);
					prev = i;
				}
			}
			if (prev < len - 1) {
				reducedPoints.push(points[len - 1]);
			}
			return reducedPoints;
		},

		// Cohen-Sutherland line clipping algorithm.
		// Used to avoid rendering parts of a polyline that are not currently visible.

		clipSegment: function (a, b, bounds, useLastCode) {
			var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
			    codeB = this._getBitCode(b, bounds),

			    codeOut, p, newCode;

			// save 2nd code to avoid calculating it on the next segment
			this._lastCode = codeB;

			while (true) {
				// if a,b is inside the clip window (trivial accept)
				if (!(codeA | codeB)) {
					return [a, b];
				// if a,b is outside the clip window (trivial reject)
				} else if (codeA & codeB) {
					return false;
				// other cases
				} else {
					codeOut = codeA || codeB;
					p = this._getEdgeIntersection(a, b, codeOut, bounds);
					newCode = this._getBitCode(p, bounds);

					if (codeOut === codeA) {
						a = p;
						codeA = newCode;
					} else {
						b = p;
						codeB = newCode;
					}
				}
			}
		},

		_getEdgeIntersection: function (a, b, code, bounds) {
			var dx = b.x - a.x,
			    dy = b.y - a.y,
			    min = bounds.min,
			    max = bounds.max;

			if (code & 8) { // top
				return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
			} else if (code & 4) { // bottom
				return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
			} else if (code & 2) { // right
				return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
			} else if (code & 1) { // left
				return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
			}
		},

		_getBitCode: function (/*Point*/ p, bounds) {
			var code = 0;

			if (p.x < bounds.min.x) { // left
				code |= 1;
			} else if (p.x > bounds.max.x) { // right
				code |= 2;
			}
			if (p.y < bounds.min.y) { // bottom
				code |= 4;
			} else if (p.y > bounds.max.y) { // top
				code |= 8;
			}

			return code;
		},

		// square distance (to avoid unnecessary Math.sqrt calls)
		_sqDist: function (p1, p2) {
			var dx = p2.x - p1.x,
			    dy = p2.y - p1.y;
			return dx * dx + dy * dy;
		},

		// return closest point on segment or distance to that point
		_sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
			var x = p1.x,
			    y = p1.y,
			    dx = p2.x - x,
			    dy = p2.y - y,
			    dot = dx * dx + dy * dy,
			    t;

			if (dot > 0) {
				t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

				if (t > 1) {
					x = p2.x;
					y = p2.y;
				} else if (t > 0) {
					x += dx * t;
					y += dy * t;
				}
			}

			dx = p.x - x;
			dy = p.y - y;

			return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
		}
	};


	/*
	 * L.Polyline is used to display polylines on a map.
	 */

	L.Polyline = L.Path.extend({
		initialize: function (latlngs, options) {
			L.Path.prototype.initialize.call(this, options);

			this._latlngs = this._convertLatLngs(latlngs);
		},

		options: {
			// how much to simplify the polyline on each zoom level
			// more = better performance and smoother look, less = more accurate
			smoothFactor: 1.0,
			noClip: false
		},

		projectLatlngs: function () {
			this._originalPoints = [];

			for (var i = 0, len = this._latlngs.length; i < len; i++) {
				this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
			}
		},

		getPathString: function () {
			for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
				str += this._getPathPartStr(this._parts[i]);
			}
			return str;
		},

		getLatLngs: function () {
			return this._latlngs;
		},

		setLatLngs: function (latlngs) {
			this._latlngs = this._convertLatLngs(latlngs);
			return this.redraw();
		},

		addLatLng: function (latlng) {
			this._latlngs.push(L.latLng(latlng));
			return this.redraw();
		},

		spliceLatLngs: function () { // (Number index, Number howMany)
			var removed = [].splice.apply(this._latlngs, arguments);
			this._convertLatLngs(this._latlngs, true);
			this.redraw();
			return removed;
		},

		closestLayerPoint: function (p) {
			var minDistance = Infinity, parts = this._parts, p1, p2, minPoint = null;

			for (var j = 0, jLen = parts.length; j < jLen; j++) {
				var points = parts[j];
				for (var i = 1, len = points.length; i < len; i++) {
					p1 = points[i - 1];
					p2 = points[i];
					var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);
					if (sqDist < minDistance) {
						minDistance = sqDist;
						minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
					}
				}
			}
			if (minPoint) {
				minPoint.distance = Math.sqrt(minDistance);
			}
			return minPoint;
		},

		getBounds: function () {
			return new L.LatLngBounds(this.getLatLngs());
		},

		_convertLatLngs: function (latlngs, overwrite) {
			var i, len, target = overwrite ? latlngs : [];

			for (i = 0, len = latlngs.length; i < len; i++) {
				if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
					return;
				}
				target[i] = L.latLng(latlngs[i]);
			}
			return target;
		},

		_initEvents: function () {
			L.Path.prototype._initEvents.call(this);
		},

		_getPathPartStr: function (points) {
			var round = L.Path.VML;

			for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
				p = points[j];
				if (round) {
					p._round();
				}
				str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
			}
			return str;
		},

		_clipPoints: function () {
			var points = this._originalPoints,
			    len = points.length,
			    i, k, segment;

			if (this.options.noClip) {
				this._parts = [points];
				return;
			}

			this._parts = [];

			var parts = this._parts,
			    vp = this._map._pathViewport,
			    lu = L.LineUtil;

			for (i = 0, k = 0; i < len - 1; i++) {
				segment = lu.clipSegment(points[i], points[i + 1], vp, i);
				if (!segment) {
					continue;
				}

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[i + 1]) || (i === len - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		},

		// simplify each clipped part of the polyline
		_simplifyPoints: function () {
			var parts = this._parts,
			    lu = L.LineUtil;

			for (var i = 0, len = parts.length; i < len; i++) {
				parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
			}
		},

		_updatePath: function () {
			if (!this._map) { return; }

			this._clipPoints();
			this._simplifyPoints();

			L.Path.prototype._updatePath.call(this);
		}
	});

	L.polyline = function (latlngs, options) {
		return new L.Polyline(latlngs, options);
	};


	/*
	 * L.PolyUtil contains utility functions for polygons (clipping, etc.).
	 */

	/*jshint bitwise:false */ // allow bitwise operations here

	L.PolyUtil = {};

	/*
	 * Sutherland-Hodgeman polygon clipping algorithm.
	 * Used to avoid rendering parts of a polygon that are not currently visible.
	 */
	L.PolyUtil.clipPolygon = function (points, bounds) {
		var clippedPoints,
		    edges = [1, 4, 2, 8],
		    i, j, k,
		    a, b,
		    len, edge, p,
		    lu = L.LineUtil;

		for (i = 0, len = points.length; i < len; i++) {
			points[i]._code = lu._getBitCode(points[i], bounds);
		}

		// for each edge (left, bottom, right, top)
		for (k = 0; k < 4; k++) {
			edge = edges[k];
			clippedPoints = [];

			for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
				a = points[i];
				b = points[j];

				// if a is inside the clip window
				if (!(a._code & edge)) {
					// if b is outside the clip window (a->b goes out of screen)
					if (b._code & edge) {
						p = lu._getEdgeIntersection(b, a, edge, bounds);
						p._code = lu._getBitCode(p, bounds);
						clippedPoints.push(p);
					}
					clippedPoints.push(a);

				// else if b is inside the clip window (a->b enters the screen)
				} else if (!(b._code & edge)) {
					p = lu._getEdgeIntersection(b, a, edge, bounds);
					p._code = lu._getBitCode(p, bounds);
					clippedPoints.push(p);
				}
			}
			points = clippedPoints;
		}

		return points;
	};


	/*
	 * L.Polygon is used to display polygons on a map.
	 */

	L.Polygon = L.Polyline.extend({
		options: {
			fill: true
		},

		initialize: function (latlngs, options) {
			L.Polyline.prototype.initialize.call(this, latlngs, options);
			this._initWithHoles(latlngs);
		},

		_initWithHoles: function (latlngs) {
			var i, len, hole;
			if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
				this._latlngs = this._convertLatLngs(latlngs[0]);
				this._holes = latlngs.slice(1);

				for (i = 0, len = this._holes.length; i < len; i++) {
					hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
					if (hole[0].equals(hole[hole.length - 1])) {
						hole.pop();
					}
				}
			}

			// filter out last point if its equal to the first one
			latlngs = this._latlngs;

			if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
				latlngs.pop();
			}
		},

		projectLatlngs: function () {
			L.Polyline.prototype.projectLatlngs.call(this);

			// project polygon holes points
			// TODO move this logic to Polyline to get rid of duplication
			this._holePoints = [];

			if (!this._holes) { return; }

			var i, j, len, len2;

			for (i = 0, len = this._holes.length; i < len; i++) {
				this._holePoints[i] = [];

				for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
					this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
				}
			}
		},

		setLatLngs: function (latlngs) {
			if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
				this._initWithHoles(latlngs);
				return this.redraw();
			} else {
				return L.Polyline.prototype.setLatLngs.call(this, latlngs);
			}
		},

		_clipPoints: function () {
			var points = this._originalPoints,
			    newParts = [];

			this._parts = [points].concat(this._holePoints);

			if (this.options.noClip) { return; }

			for (var i = 0, len = this._parts.length; i < len; i++) {
				var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
				if (clipped.length) {
					newParts.push(clipped);
				}
			}

			this._parts = newParts;
		},

		_getPathPartStr: function (points) {
			var str = L.Polyline.prototype._getPathPartStr.call(this, points);
			return str + (L.Browser.svg ? 'z' : 'x');
		}
	});

	L.polygon = function (latlngs, options) {
		return new L.Polygon(latlngs, options);
	};


	/*
	 * Contains L.MultiPolyline and L.MultiPolygon layers.
	 */

	(function () {
		function createMulti(Klass) {

			return L.FeatureGroup.extend({

				initialize: function (latlngs, options) {
					this._layers = {};
					this._options = options;
					this.setLatLngs(latlngs);
				},

				setLatLngs: function (latlngs) {
					var i = 0,
					    len = latlngs.length;

					this.eachLayer(function (layer) {
						if (i < len) {
							layer.setLatLngs(latlngs[i++]);
						} else {
							this.removeLayer(layer);
						}
					}, this);

					while (i < len) {
						this.addLayer(new Klass(latlngs[i++], this._options));
					}

					return this;
				},

				getLatLngs: function () {
					var latlngs = [];

					this.eachLayer(function (layer) {
						latlngs.push(layer.getLatLngs());
					});

					return latlngs;
				}
			});
		}

		L.MultiPolyline = createMulti(L.Polyline);
		L.MultiPolygon = createMulti(L.Polygon);

		L.multiPolyline = function (latlngs, options) {
			return new L.MultiPolyline(latlngs, options);
		};

		L.multiPolygon = function (latlngs, options) {
			return new L.MultiPolygon(latlngs, options);
		};
	}());


	/*
	 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
	 */

	L.Rectangle = L.Polygon.extend({
		initialize: function (latLngBounds, options) {
			L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
		},

		setBounds: function (latLngBounds) {
			this.setLatLngs(this._boundsToLatLngs(latLngBounds));
		},

		_boundsToLatLngs: function (latLngBounds) {
			latLngBounds = L.latLngBounds(latLngBounds);
			return [
				latLngBounds.getSouthWest(),
				latLngBounds.getNorthWest(),
				latLngBounds.getNorthEast(),
				latLngBounds.getSouthEast()
			];
		}
	});

	L.rectangle = function (latLngBounds, options) {
		return new L.Rectangle(latLngBounds, options);
	};


	/*
	 * L.Circle is a circle overlay (with a certain radius in meters).
	 */

	L.Circle = L.Path.extend({
		initialize: function (latlng, radius, options) {
			L.Path.prototype.initialize.call(this, options);

			this._latlng = L.latLng(latlng);
			this._mRadius = radius;
		},

		options: {
			fill: true
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			return this.redraw();
		},

		setRadius: function (radius) {
			this._mRadius = radius;
			return this.redraw();
		},

		projectLatlngs: function () {
			var lngRadius = this._getLngRadius(),
			    latlng = this._latlng,
			    pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);

			this._point = this._map.latLngToLayerPoint(latlng);
			this._radius = Math.max(this._point.x - pointLeft.x, 1);
		},

		getBounds: function () {
			var lngRadius = this._getLngRadius(),
			    latRadius = (this._mRadius / 40075017) * 360,
			    latlng = this._latlng;

			return new L.LatLngBounds(
			        [latlng.lat - latRadius, latlng.lng - lngRadius],
			        [latlng.lat + latRadius, latlng.lng + lngRadius]);
		},

		getLatLng: function () {
			return this._latlng;
		},

		getPathString: function () {
			var p = this._point,
			    r = this._radius;

			if (this._checkIfEmpty()) {
				return '';
			}

			if (L.Browser.svg) {
				return 'M' + p.x + ',' + (p.y - r) +
				       'A' + r + ',' + r + ',0,1,1,' +
				       (p.x - 0.1) + ',' + (p.y - r) + ' z';
			} else {
				p._round();
				r = Math.round(r);
				return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
			}
		},

		getRadius: function () {
			return this._mRadius;
		},

		// TODO Earth hardcoded, move into projection code!

		_getLatRadius: function () {
			return (this._mRadius / 40075017) * 360;
		},

		_getLngRadius: function () {
			return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
		},

		_checkIfEmpty: function () {
			if (!this._map) {
				return false;
			}
			var vp = this._map._pathViewport,
			    r = this._radius,
			    p = this._point;

			return p.x - r > vp.max.x || p.y - r > vp.max.y ||
			       p.x + r < vp.min.x || p.y + r < vp.min.y;
		}
	});

	L.circle = function (latlng, radius, options) {
		return new L.Circle(latlng, radius, options);
	};


	/*
	 * L.CircleMarker is a circle overlay with a permanent pixel radius.
	 */

	L.CircleMarker = L.Circle.extend({
		options: {
			radius: 10,
			weight: 2
		},

		initialize: function (latlng, options) {
			L.Circle.prototype.initialize.call(this, latlng, null, options);
			this._radius = this.options.radius;
		},

		projectLatlngs: function () {
			this._point = this._map.latLngToLayerPoint(this._latlng);
		},

		_updateStyle : function () {
			L.Circle.prototype._updateStyle.call(this);
			this.setRadius(this.options.radius);
		},

		setLatLng: function (latlng) {
			L.Circle.prototype.setLatLng.call(this, latlng);
			if (this._popup && this._popup._isOpen) {
				this._popup.setLatLng(latlng);
			}
			return this;
		},

		setRadius: function (radius) {
			this.options.radius = this._radius = radius;
			return this.redraw();
		},

		getRadius: function () {
			return this._radius;
		}
	});

	L.circleMarker = function (latlng, options) {
		return new L.CircleMarker(latlng, options);
	};


	/*
	 * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
	 */

	L.Polyline.include(!L.Path.CANVAS ? {} : {
		_containsPoint: function (p, closed) {
			var i, j, k, len, len2, dist, part,
			    w = this.options.weight / 2;

			if (L.Browser.touch) {
				w += 10; // polyline click tolerance on touch devices
			}

			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];
				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					if (!closed && (j === 0)) {
						continue;
					}

					dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

					if (dist <= w) {
						return true;
					}
				}
			}
			return false;
		}
	});


	/*
	 * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
	 */

	L.Polygon.include(!L.Path.CANVAS ? {} : {
		_containsPoint: function (p) {
			var inside = false,
			    part, p1, p2,
			    i, j, k,
			    len, len2;

			// TODO optimization: check if within bounds first

			if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
				// click on polygon border
				return true;
			}

			// ray casting algorithm for detecting if point is in polygon

			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];

				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					p1 = part[j];
					p2 = part[k];

					if (((p1.y > p.y) !== (p2.y > p.y)) &&
							(p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
						inside = !inside;
					}
				}
			}

			return inside;
		}
	});


	/*
	 * Extends L.Circle with Canvas-specific code.
	 */

	L.Circle.include(!L.Path.CANVAS ? {} : {
		_drawPath: function () {
			var p = this._point;
			this._ctx.beginPath();
			this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
		},

		_containsPoint: function (p) {
			var center = this._point,
			    w2 = this.options.stroke ? this.options.weight / 2 : 0;

			return (p.distanceTo(center) <= this._radius + w2);
		}
	});


	/*
	 * CircleMarker canvas specific drawing parts.
	 */

	L.CircleMarker.include(!L.Path.CANVAS ? {} : {
		_updateStyle: function () {
			L.Path.prototype._updateStyle.call(this);
		}
	});


	/*
	 * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
	 */

	L.GeoJSON = L.FeatureGroup.extend({

		initialize: function (geojson, options) {
			L.setOptions(this, options);

			this._layers = {};

			if (geojson) {
				this.addData(geojson);
			}
		},

		addData: function (geojson) {
			var features = L.Util.isArray(geojson) ? geojson : geojson.features,
			    i, len, feature;

			if (features) {
				for (i = 0, len = features.length; i < len; i++) {
					// Only add this if geometry or geometries are set and not null
					feature = features[i];
					if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
						this.addData(features[i]);
					}
				}
				return this;
			}

			var options = this.options;

			if (options.filter && !options.filter(geojson)) { return; }

			var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
			layer.feature = L.GeoJSON.asFeature(geojson);

			layer.defaultOptions = layer.options;
			this.resetStyle(layer);

			if (options.onEachFeature) {
				options.onEachFeature(geojson, layer);
			}

			return this.addLayer(layer);
		},

		resetStyle: function (layer) {
			var style = this.options.style;
			if (style) {
				// reset any custom styles
				L.Util.extend(layer.options, layer.defaultOptions);

				this._setLayerStyle(layer, style);
			}
		},

		setStyle: function (style) {
			this.eachLayer(function (layer) {
				this._setLayerStyle(layer, style);
			}, this);
		},

		_setLayerStyle: function (layer, style) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			if (layer.setStyle) {
				layer.setStyle(style);
			}
		}
	});

	L.extend(L.GeoJSON, {
		geometryToLayer: function (geojson, pointToLayer, coordsToLatLng, vectorOptions) {
			var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
			    coords = geometry.coordinates,
			    layers = [],
			    latlng, latlngs, i, len;

			coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

			switch (geometry.type) {
			case 'Point':
				latlng = coordsToLatLng(coords);
				return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

			case 'MultiPoint':
				for (i = 0, len = coords.length; i < len; i++) {
					latlng = coordsToLatLng(coords[i]);
					layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
				}
				return new L.FeatureGroup(layers);

			case 'LineString':
				latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
				return new L.Polyline(latlngs, vectorOptions);

			case 'Polygon':
				if (coords.length === 2 && !coords[1].length) {
					throw new Error('Invalid GeoJSON object.');
				}
				latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
				return new L.Polygon(latlngs, vectorOptions);

			case 'MultiLineString':
				latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
				return new L.MultiPolyline(latlngs, vectorOptions);

			case 'MultiPolygon':
				latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
				return new L.MultiPolygon(latlngs, vectorOptions);

			case 'GeometryCollection':
				for (i = 0, len = geometry.geometries.length; i < len; i++) {

					layers.push(this.geometryToLayer({
						geometry: geometry.geometries[i],
						type: 'Feature',
						properties: geojson.properties
					}, pointToLayer, coordsToLatLng, vectorOptions));
				}
				return new L.FeatureGroup(layers);

			default:
				throw new Error('Invalid GeoJSON object.');
			}
		},

		coordsToLatLng: function (coords) { // (Array[, Boolean]) -> LatLng
			return new L.LatLng(coords[1], coords[0], coords[2]);
		},

		coordsToLatLngs: function (coords, levelsDeep, coordsToLatLng) { // (Array[, Number, Function]) -> Array
			var latlng, i, len,
			    latlngs = [];

			for (i = 0, len = coords.length; i < len; i++) {
				latlng = levelsDeep ?
				        this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
				        (coordsToLatLng || this.coordsToLatLng)(coords[i]);

				latlngs.push(latlng);
			}

			return latlngs;
		},

		latLngToCoords: function (latlng) {
			var coords = [latlng.lng, latlng.lat];

			if (latlng.alt !== undefined) {
				coords.push(latlng.alt);
			}
			return coords;
		},

		latLngsToCoords: function (latLngs) {
			var coords = [];

			for (var i = 0, len = latLngs.length; i < len; i++) {
				coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
			}

			return coords;
		},

		getFeature: function (layer, newGeometry) {
			return layer.feature ? L.extend({}, layer.feature, {geometry: newGeometry}) : L.GeoJSON.asFeature(newGeometry);
		},

		asFeature: function (geoJSON) {
			if (geoJSON.type === 'Feature') {
				return geoJSON;
			}

			return {
				type: 'Feature',
				properties: {},
				geometry: geoJSON
			};
		}
	});

	var PointToGeoJSON = {
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'Point',
				coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
			});
		}
	};

	L.Marker.include(PointToGeoJSON);
	L.Circle.include(PointToGeoJSON);
	L.CircleMarker.include(PointToGeoJSON);

	L.Polyline.include({
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'LineString',
				coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
			});
		}
	});

	L.Polygon.include({
		toGeoJSON: function () {
			var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
			    i, len, hole;

			coords[0].push(coords[0][0]);

			if (this._holes) {
				for (i = 0, len = this._holes.length; i < len; i++) {
					hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
					hole.push(hole[0]);
					coords.push(hole);
				}
			}

			return L.GeoJSON.getFeature(this, {
				type: 'Polygon',
				coordinates: coords
			});
		}
	});

	(function () {
		function multiToGeoJSON(type) {
			return function () {
				var coords = [];

				this.eachLayer(function (layer) {
					coords.push(layer.toGeoJSON().geometry.coordinates);
				});

				return L.GeoJSON.getFeature(this, {
					type: type,
					coordinates: coords
				});
			};
		}

		L.MultiPolyline.include({toGeoJSON: multiToGeoJSON('MultiLineString')});
		L.MultiPolygon.include({toGeoJSON: multiToGeoJSON('MultiPolygon')});

		L.LayerGroup.include({
			toGeoJSON: function () {

				var geometry = this.feature && this.feature.geometry,
					jsons = [],
					json;

				if (geometry && geometry.type === 'MultiPoint') {
					return multiToGeoJSON('MultiPoint').call(this);
				}

				var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';

				this.eachLayer(function (layer) {
					if (layer.toGeoJSON) {
						json = layer.toGeoJSON();
						jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
					}
				});

				if (isGeometryCollection) {
					return L.GeoJSON.getFeature(this, {
						geometries: jsons,
						type: 'GeometryCollection'
					});
				}

				return {
					type: 'FeatureCollection',
					features: jsons
				};
			}
		});
	}());

	L.geoJson = function (geojson, options) {
		return new L.GeoJSON(geojson, options);
	};


	/*
	 * L.DomEvent contains functions for working with DOM events.
	 */

	L.DomEvent = {
		/* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
		addListener: function (obj, type, fn, context) { // (HTMLElement, String, Function[, Object])

			var id = L.stamp(fn),
			    key = '_leaflet_' + type + id,
			    handler, originalHandler, newType;

			if (obj[key]) { return this; }

			handler = function (e) {
				return fn.call(context || obj, e || L.DomEvent._getEvent());
			};

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				return this.addPointerListener(obj, type, handler, id);
			}
			if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
				this.addDoubleTapListener(obj, handler, id);
			}

			if ('addEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.addEventListener('DOMMouseScroll', handler, false);
					obj.addEventListener(type, handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {

					originalHandler = handler;
					newType = (type === 'mouseenter' ? 'mouseover' : 'mouseout');

					handler = function (e) {
						if (!L.DomEvent._checkMouse(obj, e)) { return; }
						return originalHandler(e);
					};

					obj.addEventListener(newType, handler, false);

				} else if (type === 'click' && L.Browser.android) {
					originalHandler = handler;
					handler = function (e) {
						return L.DomEvent._filterClick(e, originalHandler);
					};

					obj.addEventListener(type, handler, false);
				} else {
					obj.addEventListener(type, handler, false);
				}

			} else if ('attachEvent' in obj) {
				obj.attachEvent('on' + type, handler);
			}

			obj[key] = handler;

			return this;
		},

		removeListener: function (obj, type, fn) {  // (HTMLElement, String, Function)

			var id = L.stamp(fn),
			    key = '_leaflet_' + type + id,
			    handler = obj[key];

			if (!handler) { return this; }

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				this.removePointerListener(obj, type, id);
			} else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
				this.removeDoubleTapListener(obj, id);

			} else if ('removeEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.removeEventListener('DOMMouseScroll', handler, false);
					obj.removeEventListener(type, handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
					obj.removeEventListener((type === 'mouseenter' ? 'mouseover' : 'mouseout'), handler, false);
				} else {
					obj.removeEventListener(type, handler, false);
				}
			} else if ('detachEvent' in obj) {
				obj.detachEvent('on' + type, handler);
			}

			obj[key] = null;

			return this;
		},

		stopPropagation: function (e) {

			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
			L.DomEvent._skipped(e);

			return this;
		},

		disableScrollPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			return L.DomEvent
				.on(el, 'mousewheel', stop)
				.on(el, 'MozMousePixelScroll', stop);
		},

		disableClickPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.on(el, L.Draggable.START[i], stop);
			}

			return L.DomEvent
				.on(el, 'click', L.DomEvent._fakeStop)
				.on(el, 'dblclick', stop);
		},

		preventDefault: function (e) {

			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			return this;
		},

		stop: function (e) {
			return L.DomEvent
				.preventDefault(e)
				.stopPropagation(e);
		},

		getMousePosition: function (e, container) {
			if (!container) {
				return new L.Point(e.clientX, e.clientY);
			}

			var rect = container.getBoundingClientRect();

			return new L.Point(
				e.clientX - rect.left - container.clientLeft,
				e.clientY - rect.top - container.clientTop);
		},

		getWheelDelta: function (e) {

			var delta = 0;

			if (e.wheelDelta) {
				delta = e.wheelDelta / 120;
			}
			if (e.detail) {
				delta = -e.detail / 3;
			}
			return delta;
		},

		_skipEvents: {},

		_fakeStop: function (e) {
			// fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
			L.DomEvent._skipEvents[e.type] = true;
		},

		_skipped: function (e) {
			var skipped = this._skipEvents[e.type];
			// reset when checking, as it's only used in map container and propagates outside of the map
			this._skipEvents[e.type] = false;
			return skipped;
		},

		// check if element really left/entered the event target (for mouseenter/mouseleave)
		_checkMouse: function (el, e) {

			var related = e.relatedTarget;

			if (!related) { return true; }

			try {
				while (related && (related !== el)) {
					related = related.parentNode;
				}
			} catch (err) {
				return false;
			}
			return (related !== el);
		},

		_getEvent: function () { // evil magic for IE
			/*jshint noarg:false */
			var e = window.event;
			if (!e) {
				var caller = arguments.callee.caller;
				while (caller) {
					e = caller['arguments'][0];
					if (e && window.Event === e.constructor) {
						break;
					}
					caller = caller.caller;
				}
			}
			return e;
		},

		// this is a horrible workaround for a bug in Android where a single touch triggers two click events
		_filterClick: function (e, handler) {
			var timeStamp = (e.timeStamp || e.originalEvent.timeStamp),
				elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

			// are they closer together than 500ms yet more than 100ms?
			// Android typically triggers them ~300ms apart while multiple listeners
			// on the same event should be triggered far faster;
			// or check if click is simulated on the element, and if it is, reject any non-simulated events

			if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
				L.DomEvent.stop(e);
				return;
			}
			L.DomEvent._lastClick = timeStamp;

			return handler(e);
		}
	};

	L.DomEvent.on = L.DomEvent.addListener;
	L.DomEvent.off = L.DomEvent.removeListener;


	/*
	 * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
	 */

	L.Draggable = L.Class.extend({
		includes: L.Mixin.Events,

		statics: {
			START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
			END: {
				mousedown: 'mouseup',
				touchstart: 'touchend',
				pointerdown: 'touchend',
				MSPointerDown: 'touchend'
			},
			MOVE: {
				mousedown: 'mousemove',
				touchstart: 'touchmove',
				pointerdown: 'touchmove',
				MSPointerDown: 'touchmove'
			}
		},

		initialize: function (element, dragStartTarget) {
			this._element = element;
			this._dragStartTarget = dragStartTarget || element;
		},

		enable: function () {
			if (this._enabled) { return; }

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
			}

			this._enabled = true;
		},

		disable: function () {
			if (!this._enabled) { return; }

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
			}

			this._enabled = false;
			this._moved = false;
		},

		_onDown: function (e) {
			this._moved = false;

			if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }

			L.DomEvent.stopPropagation(e);

			if (L.Draggable._disabled) { return; }

			L.DomUtil.disableImageDrag();
			L.DomUtil.disableTextSelection();

			if (this._moving) { return; }

			var first = e.touches ? e.touches[0] : e;

			this._startPoint = new L.Point(first.clientX, first.clientY);
			this._startPos = this._newPos = L.DomUtil.getPosition(this._element);

			L.DomEvent
			    .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
			    .on(document, L.Draggable.END[e.type], this._onUp, this);
		},

		_onMove: function (e) {
			if (e.touches && e.touches.length > 1) {
				this._moved = true;
				return;
			}

			var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
			    newPoint = new L.Point(first.clientX, first.clientY),
			    offset = newPoint.subtract(this._startPoint);

			if (!offset.x && !offset.y) { return; }
			if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) { return; }

			L.DomEvent.preventDefault(e);

			if (!this._moved) {
				this.fire('dragstart');

				this._moved = true;
				this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

				L.DomUtil.addClass(document.body, 'leaflet-dragging');
				this._lastTarget = e.target || e.srcElement;
				L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
			}

			this._newPos = this._startPos.add(offset);
			this._moving = true;

			L.Util.cancelAnimFrame(this._animRequest);
			this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
		},

		_updatePosition: function () {
			this.fire('predrag');
			L.DomUtil.setPosition(this._element, this._newPos);
			this.fire('drag');
		},

		_onUp: function () {
			L.DomUtil.removeClass(document.body, 'leaflet-dragging');

			if (this._lastTarget) {
				L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
				this._lastTarget = null;
			}

			for (var i in L.Draggable.MOVE) {
				L.DomEvent
				    .off(document, L.Draggable.MOVE[i], this._onMove)
				    .off(document, L.Draggable.END[i], this._onUp);
			}

			L.DomUtil.enableImageDrag();
			L.DomUtil.enableTextSelection();

			if (this._moved && this._moving) {
				// ensure drag is not fired after dragend
				L.Util.cancelAnimFrame(this._animRequest);

				this.fire('dragend', {
					distance: this._newPos.distanceTo(this._startPos)
				});
			}

			this._moving = false;
		}
	});


	/*
		L.Handler is a base class for handler classes that are used internally to inject
		interaction features like dragging to classes like Map and Marker.
	*/

	L.Handler = L.Class.extend({
		initialize: function (map) {
			this._map = map;
		},

		enable: function () {
			if (this._enabled) { return; }

			this._enabled = true;
			this.addHooks();
		},

		disable: function () {
			if (!this._enabled) { return; }

			this._enabled = false;
			this.removeHooks();
		},

		enabled: function () {
			return !!this._enabled;
		}
	});


	/*
	 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
	 */

	L.Map.mergeOptions({
		dragging: true,

		inertia: !L.Browser.android23,
		inertiaDeceleration: 3400, // px/s^2
		inertiaMaxSpeed: Infinity, // px/s
		inertiaThreshold: L.Browser.touch ? 32 : 18, // ms
		easeLinearity: 0.25,

		// TODO refactor, move to CRS
		worldCopyJump: false
	});

	L.Map.Drag = L.Handler.extend({
		addHooks: function () {
			if (!this._draggable) {
				var map = this._map;

				this._draggable = new L.Draggable(map._mapPane, map._container);

				this._draggable.on({
					'dragstart': this._onDragStart,
					'drag': this._onDrag,
					'dragend': this._onDragEnd
				}, this);

				if (map.options.worldCopyJump) {
					this._draggable.on('predrag', this._onPreDrag, this);
					map.on('viewreset', this._onViewReset, this);

					map.whenReady(this._onViewReset, this);
				}
			}
			this._draggable.enable();
		},

		removeHooks: function () {
			this._draggable.disable();
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			var map = this._map;

			if (map._panAnim) {
				map._panAnim.stop();
			}

			map
			    .fire('movestart')
			    .fire('dragstart');

			if (map.options.inertia) {
				this._positions = [];
				this._times = [];
			}
		},

		_onDrag: function () {
			if (this._map.options.inertia) {
				var time = this._lastTime = +new Date(),
				    pos = this._lastPos = this._draggable._newPos;

				this._positions.push(pos);
				this._times.push(time);

				if (time - this._times[0] > 200) {
					this._positions.shift();
					this._times.shift();
				}
			}

			this._map
			    .fire('move')
			    .fire('drag');
		},

		_onViewReset: function () {
			// TODO fix hardcoded Earth values
			var pxCenter = this._map.getSize()._divideBy(2),
			    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

			this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
			this._worldWidth = this._map.project([0, 180]).x;
		},

		_onPreDrag: function () {
			// TODO refactor to be able to adjust map pane position after zoom
			var worldWidth = this._worldWidth,
			    halfWidth = Math.round(worldWidth / 2),
			    dx = this._initialWorldOffset,
			    x = this._draggable._newPos.x,
			    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
			    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
			    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

			this._draggable._newPos.x = newX;
		},

		_onDragEnd: function (e) {
			var map = this._map,
			    options = map.options,
			    delay = +new Date() - this._lastTime,

			    noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];

			map.fire('dragend', e);

			if (noInertia) {
				map.fire('moveend');

			} else {

				var direction = this._lastPos.subtract(this._positions[0]),
				    duration = (this._lastTime + delay - this._times[0]) / 1000,
				    ease = options.easeLinearity,

				    speedVector = direction.multiplyBy(ease / duration),
				    speed = speedVector.distanceTo([0, 0]),

				    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
				    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

				    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
				    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

				if (!offset.x || !offset.y) {
					map.fire('moveend');

				} else {
					offset = map._limitOffset(offset, map.options.maxBounds);

					L.Util.requestAnimFrame(function () {
						map.panBy(offset, {
							duration: decelerationDuration,
							easeLinearity: ease,
							noMoveStart: true
						});
					});
				}
			}
		}
	});

	L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);


	/*
	 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
	 */

	L.Map.mergeOptions({
		doubleClickZoom: true
	});

	L.Map.DoubleClickZoom = L.Handler.extend({
		addHooks: function () {
			this._map.on('dblclick', this._onDoubleClick, this);
		},

		removeHooks: function () {
			this._map.off('dblclick', this._onDoubleClick, this);
		},

		_onDoubleClick: function (e) {
			var map = this._map,
			    zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);

			if (map.options.doubleClickZoom === 'center') {
				map.setZoom(zoom);
			} else {
				map.setZoomAround(e.containerPoint, zoom);
			}
		}
	});

	L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);


	/*
	 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
	 */

	L.Map.mergeOptions({
		scrollWheelZoom: true
	});

	L.Map.ScrollWheelZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
			L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
			this._delta = 0;
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
			L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
		},

		_onWheelScroll: function (e) {
			var delta = L.DomEvent.getWheelDelta(e);

			this._delta += delta;
			this._lastMousePos = this._map.mouseEventToContainerPoint(e);

			if (!this._startTime) {
				this._startTime = +new Date();
			}

			var left = Math.max(40 - (+new Date() - this._startTime), 0);

			clearTimeout(this._timer);
			this._timer = setTimeout(L.bind(this._performZoom, this), left);

			L.DomEvent.preventDefault(e);
			L.DomEvent.stopPropagation(e);
		},

		_performZoom: function () {
			var map = this._map,
			    delta = this._delta,
			    zoom = map.getZoom();

			delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
			delta = Math.max(Math.min(delta, 4), -4);
			delta = map._limitZoom(zoom + delta) - zoom;

			this._delta = 0;
			this._startTime = null;

			if (!delta) { return; }

			if (map.options.scrollWheelZoom === 'center') {
				map.setZoom(zoom + delta);
			} else {
				map.setZoomAround(this._lastMousePos, zoom + delta);
			}
		}
	});

	L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);


	/*
	 * Extends the event handling code with double tap support for mobile browsers.
	 */

	L.extend(L.DomEvent, {

		_touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
		_touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

		// inspired by Zepto touch code by Thomas Fuchs
		addDoubleTapListener: function (obj, handler, id) {
			var last,
			    doubleTap = false,
			    delay = 250,
			    touch,
			    pre = '_leaflet_',
			    touchstart = this._touchstart,
			    touchend = this._touchend,
			    trackedTouches = [];

			function onTouchStart(e) {
				var count;

				if (L.Browser.pointer) {
					trackedTouches.push(e.pointerId);
					count = trackedTouches.length;
				} else {
					count = e.touches.length;
				}
				if (count > 1) {
					return;
				}

				var now = Date.now(),
					delta = now - (last || now);

				touch = e.touches ? e.touches[0] : e;
				doubleTap = (delta > 0 && delta <= delay);
				last = now;
			}

			function onTouchEnd(e) {
				if (L.Browser.pointer) {
					var idx = trackedTouches.indexOf(e.pointerId);
					if (idx === -1) {
						return;
					}
					trackedTouches.splice(idx, 1);
				}

				if (doubleTap) {
					if (L.Browser.pointer) {
						// work around .type being readonly with MSPointer* events
						var newTouch = { },
							prop;

						// jshint forin:false
						for (var i in touch) {
							prop = touch[i];
							if (typeof prop === 'function') {
								newTouch[i] = prop.bind(touch);
							} else {
								newTouch[i] = prop;
							}
						}
						touch = newTouch;
					}
					touch.type = 'dblclick';
					handler(touch);
					last = null;
				}
			}
			obj[pre + touchstart + id] = onTouchStart;
			obj[pre + touchend + id] = onTouchEnd;

			// on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
			// will not come through to us, so we will lose track of how many touches are ongoing
			var endElement = L.Browser.pointer ? document.documentElement : obj;

			obj.addEventListener(touchstart, onTouchStart, false);
			endElement.addEventListener(touchend, onTouchEnd, false);

			if (L.Browser.pointer) {
				endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
			}

			return this;
		},

		removeDoubleTapListener: function (obj, id) {
			var pre = '_leaflet_';

			obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
			(L.Browser.pointer ? document.documentElement : obj).removeEventListener(
			        this._touchend, obj[pre + this._touchend + id], false);

			if (L.Browser.pointer) {
				document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id],
					false);
			}

			return this;
		}
	});


	/*
	 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
	 */

	L.extend(L.DomEvent, {

		//static
		POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
		POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
		POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
		POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',

		_pointers: [],
		_pointerDocumentListener: false,

		// Provides a touch events wrapper for (ms)pointer events.
		// Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
		//ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

		addPointerListener: function (obj, type, handler, id) {

			switch (type) {
			case 'touchstart':
				return this.addPointerListenerStart(obj, type, handler, id);
			case 'touchend':
				return this.addPointerListenerEnd(obj, type, handler, id);
			case 'touchmove':
				return this.addPointerListenerMove(obj, type, handler, id);
			default:
				throw 'Unknown touch event type';
			}
		},

		addPointerListenerStart: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    pointers = this._pointers;

			var cb = function (e) {

				L.DomEvent.preventDefault(e);

				var alreadyInArray = false;
				for (var i = 0; i < pointers.length; i++) {
					if (pointers[i].pointerId === e.pointerId) {
						alreadyInArray = true;
						break;
					}
				}
				if (!alreadyInArray) {
					pointers.push(e);
				}

				e.touches = pointers.slice();
				e.changedTouches = [e];

				handler(e);
			};

			obj[pre + 'touchstart' + id] = cb;
			obj.addEventListener(this.POINTER_DOWN, cb, false);

			// need to also listen for end events to keep the _pointers list accurate
			// this needs to be on the body and never go away
			if (!this._pointerDocumentListener) {
				var internalCb = function (e) {
					for (var i = 0; i < pointers.length; i++) {
						if (pointers[i].pointerId === e.pointerId) {
							pointers.splice(i, 1);
							break;
						}
					}
				};
				//We listen on the documentElement as any drags that end by moving the touch off the screen get fired there
				document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
				document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);

				this._pointerDocumentListener = true;
			}

			return this;
		},

		addPointerListenerMove: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    touches = this._pointers;

			function cb(e) {

				// don't fire touch moves when mouse isn't down
				if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

				for (var i = 0; i < touches.length; i++) {
					if (touches[i].pointerId === e.pointerId) {
						touches[i] = e;
						break;
					}
				}

				e.touches = touches.slice();
				e.changedTouches = [e];

				handler(e);
			}

			obj[pre + 'touchmove' + id] = cb;
			obj.addEventListener(this.POINTER_MOVE, cb, false);

			return this;
		},

		addPointerListenerEnd: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    touches = this._pointers;

			var cb = function (e) {
				for (var i = 0; i < touches.length; i++) {
					if (touches[i].pointerId === e.pointerId) {
						touches.splice(i, 1);
						break;
					}
				}

				e.touches = touches.slice();
				e.changedTouches = [e];

				handler(e);
			};

			obj[pre + 'touchend' + id] = cb;
			obj.addEventListener(this.POINTER_UP, cb, false);
			obj.addEventListener(this.POINTER_CANCEL, cb, false);

			return this;
		},

		removePointerListener: function (obj, type, id) {
			var pre = '_leaflet_',
			    cb = obj[pre + type + id];

			switch (type) {
			case 'touchstart':
				obj.removeEventListener(this.POINTER_DOWN, cb, false);
				break;
			case 'touchmove':
				obj.removeEventListener(this.POINTER_MOVE, cb, false);
				break;
			case 'touchend':
				obj.removeEventListener(this.POINTER_UP, cb, false);
				obj.removeEventListener(this.POINTER_CANCEL, cb, false);
				break;
			}

			return this;
		}
	});


	/*
	 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
	 */

	L.Map.mergeOptions({
		touchZoom: L.Browser.touch && !L.Browser.android23,
		bounceAtZoomLimits: true
	});

	L.Map.TouchZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		_onTouchStart: function (e) {
			var map = this._map;

			if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

			var p1 = map.mouseEventToLayerPoint(e.touches[0]),
			    p2 = map.mouseEventToLayerPoint(e.touches[1]),
			    viewCenter = map._getCenterLayerPoint();

			this._startCenter = p1.add(p2)._divideBy(2);
			this._startDist = p1.distanceTo(p2);

			this._moved = false;
			this._zooming = true;

			this._centerOffset = viewCenter.subtract(this._startCenter);

			if (map._panAnim) {
				map._panAnim.stop();
			}

			L.DomEvent
			    .on(document, 'touchmove', this._onTouchMove, this)
			    .on(document, 'touchend', this._onTouchEnd, this);

			L.DomEvent.preventDefault(e);
		},

		_onTouchMove: function (e) {
			var map = this._map;

			if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

			var p1 = map.mouseEventToLayerPoint(e.touches[0]),
			    p2 = map.mouseEventToLayerPoint(e.touches[1]);

			this._scale = p1.distanceTo(p2) / this._startDist;
			this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

			if (this._scale === 1) { return; }

			if (!map.options.bounceAtZoomLimits) {
				if ((map.getZoom() === map.getMinZoom() && this._scale < 1) ||
				    (map.getZoom() === map.getMaxZoom() && this._scale > 1)) { return; }
			}

			if (!this._moved) {
				L.DomUtil.addClass(map._mapPane, 'leaflet-touching');

				map
				    .fire('movestart')
				    .fire('zoomstart');

				this._moved = true;
			}

			L.Util.cancelAnimFrame(this._animRequest);
			this._animRequest = L.Util.requestAnimFrame(
			        this._updateOnMove, this, true, this._map._container);

			L.DomEvent.preventDefault(e);
		},

		_updateOnMove: function () {
			var map = this._map,
			    origin = this._getScaleOrigin(),
			    center = map.layerPointToLatLng(origin),
			    zoom = map.getScaleZoom(this._scale);

			map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta, false, true);
		},

		_onTouchEnd: function () {
			if (!this._moved || !this._zooming) {
				this._zooming = false;
				return;
			}

			var map = this._map;

			this._zooming = false;
			L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
			L.Util.cancelAnimFrame(this._animRequest);

			L.DomEvent
			    .off(document, 'touchmove', this._onTouchMove)
			    .off(document, 'touchend', this._onTouchEnd);

			var origin = this._getScaleOrigin(),
			    center = map.layerPointToLatLng(origin),

			    oldZoom = map.getZoom(),
			    floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
			    roundZoomDelta = (floatZoomDelta > 0 ?
			            Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta)),

			    zoom = map._limitZoom(oldZoom + roundZoomDelta),
			    scale = map.getZoomScale(zoom) / this._scale;

			map._animateZoom(center, zoom, origin, scale);
		},

		_getScaleOrigin: function () {
			var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
			return this._startCenter.add(centerOffset);
		}
	});

	L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);


	/*
	 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
	 */

	L.Map.mergeOptions({
		tap: true,
		tapTolerance: 15
	});

	L.Map.Tap = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
		},

		_onDown: function (e) {
			if (!e.touches) { return; }

			L.DomEvent.preventDefault(e);

			this._fireClick = true;

			// don't simulate click or track longpress if more than 1 touch
			if (e.touches.length > 1) {
				this._fireClick = false;
				clearTimeout(this._holdTimeout);
				return;
			}

			var first = e.touches[0],
			    el = first.target;

			this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

			// if touching a link, highlight it
			if (el.tagName && el.tagName.toLowerCase() === 'a') {
				L.DomUtil.addClass(el, 'leaflet-active');
			}

			// simulate long hold but setting a timeout
			this._holdTimeout = setTimeout(L.bind(function () {
				if (this._isTapValid()) {
					this._fireClick = false;
					this._onUp();
					this._simulateEvent('contextmenu', first);
				}
			}, this), 1000);

			L.DomEvent
				.on(document, 'touchmove', this._onMove, this)
				.on(document, 'touchend', this._onUp, this);
		},

		_onUp: function (e) {
			clearTimeout(this._holdTimeout);

			L.DomEvent
				.off(document, 'touchmove', this._onMove, this)
				.off(document, 'touchend', this._onUp, this);

			if (this._fireClick && e && e.changedTouches) {

				var first = e.changedTouches[0],
				    el = first.target;

				if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
					L.DomUtil.removeClass(el, 'leaflet-active');
				}

				// simulate click if the touch didn't move too much
				if (this._isTapValid()) {
					this._simulateEvent('click', first);
				}
			}
		},

		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
		},

		_onMove: function (e) {
			var first = e.touches[0];
			this._newPos = new L.Point(first.clientX, first.clientY);
		},

		_simulateEvent: function (type, e) {
			var simulatedEvent = document.createEvent('MouseEvents');

			simulatedEvent._simulated = true;
			e.target._simulatedClick = true;

			simulatedEvent.initMouseEvent(
			        type, true, true, window, 1,
			        e.screenX, e.screenY,
			        e.clientX, e.clientY,
			        false, false, false, false, 0, null);

			e.target.dispatchEvent(simulatedEvent);
		}
	});

	if (L.Browser.touch && !L.Browser.pointer) {
		L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
	}


	/*
	 * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
	  * (zoom to a selected bounding box), enabled by default.
	 */

	L.Map.mergeOptions({
		boxZoom: true
	});

	L.Map.BoxZoom = L.Handler.extend({
		initialize: function (map) {
			this._map = map;
			this._container = map._container;
			this._pane = map._panes.overlayPane;
			this._moved = false;
		},

		addHooks: function () {
			L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
			this._moved = false;
		},

		moved: function () {
			return this._moved;
		},

		_onMouseDown: function (e) {
			this._moved = false;

			if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

			L.DomUtil.disableTextSelection();
			L.DomUtil.disableImageDrag();

			this._startLayerPoint = this._map.mouseEventToLayerPoint(e);

			L.DomEvent
			    .on(document, 'mousemove', this._onMouseMove, this)
			    .on(document, 'mouseup', this._onMouseUp, this)
			    .on(document, 'keydown', this._onKeyDown, this);
		},

		_onMouseMove: function (e) {
			if (!this._moved) {
				this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
				L.DomUtil.setPosition(this._box, this._startLayerPoint);

				//TODO refactor: move cursor to styles
				this._container.style.cursor = 'crosshair';
				this._map.fire('boxzoomstart');
			}

			var startPoint = this._startLayerPoint,
			    box = this._box,

			    layerPoint = this._map.mouseEventToLayerPoint(e),
			    offset = layerPoint.subtract(startPoint),

			    newPos = new L.Point(
			        Math.min(layerPoint.x, startPoint.x),
			        Math.min(layerPoint.y, startPoint.y));

			L.DomUtil.setPosition(box, newPos);

			this._moved = true;

			// TODO refactor: remove hardcoded 4 pixels
			box.style.width  = (Math.max(0, Math.abs(offset.x) - 4)) + 'px';
			box.style.height = (Math.max(0, Math.abs(offset.y) - 4)) + 'px';
		},

		_finish: function () {
			if (this._moved) {
				this._pane.removeChild(this._box);
				this._container.style.cursor = '';
			}

			L.DomUtil.enableTextSelection();
			L.DomUtil.enableImageDrag();

			L.DomEvent
			    .off(document, 'mousemove', this._onMouseMove)
			    .off(document, 'mouseup', this._onMouseUp)
			    .off(document, 'keydown', this._onKeyDown);
		},

		_onMouseUp: function (e) {

			this._finish();

			var map = this._map,
			    layerPoint = map.mouseEventToLayerPoint(e);

			if (this._startLayerPoint.equals(layerPoint)) { return; }

			var bounds = new L.LatLngBounds(
			        map.layerPointToLatLng(this._startLayerPoint),
			        map.layerPointToLatLng(layerPoint));

			map.fitBounds(bounds);

			map.fire('boxzoomend', {
				boxZoomBounds: bounds
			});
		},

		_onKeyDown: function (e) {
			if (e.keyCode === 27) {
				this._finish();
			}
		}
	});

	L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);


	/*
	 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
	 */

	L.Map.mergeOptions({
		keyboard: true,
		keyboardPanOffset: 80,
		keyboardZoomOffset: 1
	});

	L.Map.Keyboard = L.Handler.extend({

		keyCodes: {
			left:    [37],
			right:   [39],
			down:    [40],
			up:      [38],
			zoomIn:  [187, 107, 61, 171],
			zoomOut: [189, 109, 173]
		},

		initialize: function (map) {
			this._map = map;

			this._setPanOffset(map.options.keyboardPanOffset);
			this._setZoomOffset(map.options.keyboardZoomOffset);
		},

		addHooks: function () {
			var container = this._map._container;

			// make the container focusable by tabbing
			if (container.tabIndex === -1) {
				container.tabIndex = '0';
			}

			L.DomEvent
			    .on(container, 'focus', this._onFocus, this)
			    .on(container, 'blur', this._onBlur, this)
			    .on(container, 'mousedown', this._onMouseDown, this);

			this._map
			    .on('focus', this._addHooks, this)
			    .on('blur', this._removeHooks, this);
		},

		removeHooks: function () {
			this._removeHooks();

			var container = this._map._container;

			L.DomEvent
			    .off(container, 'focus', this._onFocus, this)
			    .off(container, 'blur', this._onBlur, this)
			    .off(container, 'mousedown', this._onMouseDown, this);

			this._map
			    .off('focus', this._addHooks, this)
			    .off('blur', this._removeHooks, this);
		},

		_onMouseDown: function () {
			if (this._focused) { return; }

			var body = document.body,
			    docEl = document.documentElement,
			    top = body.scrollTop || docEl.scrollTop,
			    left = body.scrollLeft || docEl.scrollLeft;

			this._map._container.focus();

			window.scrollTo(left, top);
		},

		_onFocus: function () {
			this._focused = true;
			this._map.fire('focus');
		},

		_onBlur: function () {
			this._focused = false;
			this._map.fire('blur');
		},

		_setPanOffset: function (pan) {
			var keys = this._panKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.left.length; i < len; i++) {
				keys[codes.left[i]] = [-1 * pan, 0];
			}
			for (i = 0, len = codes.right.length; i < len; i++) {
				keys[codes.right[i]] = [pan, 0];
			}
			for (i = 0, len = codes.down.length; i < len; i++) {
				keys[codes.down[i]] = [0, pan];
			}
			for (i = 0, len = codes.up.length; i < len; i++) {
				keys[codes.up[i]] = [0, -1 * pan];
			}
		},

		_setZoomOffset: function (zoom) {
			var keys = this._zoomKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.zoomIn.length; i < len; i++) {
				keys[codes.zoomIn[i]] = zoom;
			}
			for (i = 0, len = codes.zoomOut.length; i < len; i++) {
				keys[codes.zoomOut[i]] = -zoom;
			}
		},

		_addHooks: function () {
			L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
		},

		_removeHooks: function () {
			L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
		},

		_onKeyDown: function (e) {
			var key = e.keyCode,
			    map = this._map;

			if (key in this._panKeys) {

				if (map._panAnim && map._panAnim._inProgress) { return; }

				map.panBy(this._panKeys[key]);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}

			} else if (key in this._zoomKeys) {
				map.setZoom(map.getZoom() + this._zoomKeys[key]);

			} else {
				return;
			}

			L.DomEvent.stop(e);
		}
	});

	L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);


	/*
	 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
	 */

	L.Handler.MarkerDrag = L.Handler.extend({
		initialize: function (marker) {
			this._marker = marker;
		},

		addHooks: function () {
			var icon = this._marker._icon;
			if (!this._draggable) {
				this._draggable = new L.Draggable(icon, icon);
			}

			this._draggable
				.on('dragstart', this._onDragStart, this)
				.on('drag', this._onDrag, this)
				.on('dragend', this._onDragEnd, this);
			this._draggable.enable();
			L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
		},

		removeHooks: function () {
			this._draggable
				.off('dragstart', this._onDragStart, this)
				.off('drag', this._onDrag, this)
				.off('dragend', this._onDragEnd, this);

			this._draggable.disable();
			L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			this._marker
			    .closePopup()
			    .fire('movestart')
			    .fire('dragstart');
		},

		_onDrag: function () {
			var marker = this._marker,
			    shadow = marker._shadow,
			    iconPos = L.DomUtil.getPosition(marker._icon),
			    latlng = marker._map.layerPointToLatLng(iconPos);

			// update shadow position
			if (shadow) {
				L.DomUtil.setPosition(shadow, iconPos);
			}

			marker._latlng = latlng;

			marker
			    .fire('move', {latlng: latlng})
			    .fire('drag');
		},

		_onDragEnd: function (e) {
			this._marker
			    .fire('moveend')
			    .fire('dragend', e);
		}
	});


	/*
	 * L.Control is a base class for implementing map controls. Handles positioning.
	 * All other controls extend from this class.
	 */

	L.Control = L.Class.extend({
		options: {
			position: 'topright'
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		getPosition: function () {
			return this.options.position;
		},

		setPosition: function (position) {
			var map = this._map;

			if (map) {
				map.removeControl(this);
			}

			this.options.position = position;

			if (map) {
				map.addControl(this);
			}

			return this;
		},

		getContainer: function () {
			return this._container;
		},

		addTo: function (map) {
			this._map = map;

			var container = this._container = this.onAdd(map),
			    pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			L.DomUtil.addClass(container, 'leaflet-control');

			if (pos.indexOf('bottom') !== -1) {
				corner.insertBefore(container, corner.firstChild);
			} else {
				corner.appendChild(container);
			}

			return this;
		},

		removeFrom: function (map) {
			var pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			corner.removeChild(this._container);
			this._map = null;

			if (this.onRemove) {
				this.onRemove(map);
			}

			return this;
		},

		_refocusOnMap: function () {
			if (this._map) {
				this._map.getContainer().focus();
			}
		}
	});

	L.control = function (options) {
		return new L.Control(options);
	};


	// adds control-related methods to L.Map

	L.Map.include({
		addControl: function (control) {
			control.addTo(this);
			return this;
		},

		removeControl: function (control) {
			control.removeFrom(this);
			return this;
		},

		_initControlPos: function () {
			var corners = this._controlCorners = {},
			    l = 'leaflet-',
			    container = this._controlContainer =
			            L.DomUtil.create('div', l + 'control-container', this._container);

			function createCorner(vSide, hSide) {
				var className = l + vSide + ' ' + l + hSide;

				corners[vSide + hSide] = L.DomUtil.create('div', className, container);
			}

			createCorner('top', 'left');
			createCorner('top', 'right');
			createCorner('bottom', 'left');
			createCorner('bottom', 'right');
		},

		_clearControlPos: function () {
			this._container.removeChild(this._controlContainer);
		}
	});


	/*
	 * L.Control.Zoom is used for the default zoom buttons on the map.
	 */

	L.Control.Zoom = L.Control.extend({
		options: {
			position: 'topleft',
			zoomInText: '+',
			zoomInTitle: 'Zoom in',
			zoomOutText: '-',
			zoomOutTitle: 'Zoom out'
		},

		onAdd: function (map) {
			var zoomName = 'leaflet-control-zoom',
			    container = L.DomUtil.create('div', zoomName + ' leaflet-bar');

			this._map = map;

			this._zoomInButton  = this._createButton(
			        this.options.zoomInText, this.options.zoomInTitle,
			        zoomName + '-in',  container, this._zoomIn,  this);
			this._zoomOutButton = this._createButton(
			        this.options.zoomOutText, this.options.zoomOutTitle,
			        zoomName + '-out', container, this._zoomOut, this);

			this._updateDisabled();
			map.on('zoomend zoomlevelschange', this._updateDisabled, this);

			return container;
		},

		onRemove: function (map) {
			map.off('zoomend zoomlevelschange', this._updateDisabled, this);
		},

		_zoomIn: function (e) {
			this._map.zoomIn(e.shiftKey ? 3 : 1);
		},

		_zoomOut: function (e) {
			this._map.zoomOut(e.shiftKey ? 3 : 1);
		},

		_createButton: function (html, title, className, container, fn, context) {
			var link = L.DomUtil.create('a', className, container);
			link.innerHTML = html;
			link.href = '#';
			link.title = title;

			var stop = L.DomEvent.stopPropagation;

			L.DomEvent
			    .on(link, 'click', stop)
			    .on(link, 'mousedown', stop)
			    .on(link, 'dblclick', stop)
			    .on(link, 'click', L.DomEvent.preventDefault)
			    .on(link, 'click', fn, context)
			    .on(link, 'click', this._refocusOnMap, context);

			return link;
		},

		_updateDisabled: function () {
			var map = this._map,
				className = 'leaflet-disabled';

			L.DomUtil.removeClass(this._zoomInButton, className);
			L.DomUtil.removeClass(this._zoomOutButton, className);

			if (map._zoom === map.getMinZoom()) {
				L.DomUtil.addClass(this._zoomOutButton, className);
			}
			if (map._zoom === map.getMaxZoom()) {
				L.DomUtil.addClass(this._zoomInButton, className);
			}
		}
	});

	L.Map.mergeOptions({
		zoomControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.zoomControl) {
			this.zoomControl = new L.Control.Zoom();
			this.addControl(this.zoomControl);
		}
	});

	L.control.zoom = function (options) {
		return new L.Control.Zoom(options);
	};



	/*
	 * L.Control.Attribution is used for displaying attribution on the map (added by default).
	 */

	L.Control.Attribution = L.Control.extend({
		options: {
			position: 'bottomright',
			prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
		},

		initialize: function (options) {
			L.setOptions(this, options);

			this._attributions = {};
		},

		onAdd: function (map) {
			this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
			L.DomEvent.disableClickPropagation(this._container);

			for (var i in map._layers) {
				if (map._layers[i].getAttribution) {
					this.addAttribution(map._layers[i].getAttribution());
				}
			}
			
			map
			    .on('layeradd', this._onLayerAdd, this)
			    .on('layerremove', this._onLayerRemove, this);

			this._update();

			return this._container;
		},

		onRemove: function (map) {
			map
			    .off('layeradd', this._onLayerAdd)
			    .off('layerremove', this._onLayerRemove);

		},

		setPrefix: function (prefix) {
			this.options.prefix = prefix;
			this._update();
			return this;
		},

		addAttribution: function (text) {
			if (!text) { return; }

			if (!this._attributions[text]) {
				this._attributions[text] = 0;
			}
			this._attributions[text]++;

			this._update();

			return this;
		},

		removeAttribution: function (text) {
			if (!text) { return; }

			if (this._attributions[text]) {
				this._attributions[text]--;
				this._update();
			}

			return this;
		},

		_update: function () {
			if (!this._map) { return; }

			var attribs = [];

			for (var i in this._attributions) {
				if (this._attributions[i]) {
					attribs.push(i);
				}
			}

			var prefixAndAttribs = [];

			if (this.options.prefix) {
				prefixAndAttribs.push(this.options.prefix);
			}
			if (attribs.length) {
				prefixAndAttribs.push(attribs.join(', '));
			}

			this._container.innerHTML = prefixAndAttribs.join(' | ');
		},

		_onLayerAdd: function (e) {
			if (e.layer.getAttribution) {
				this.addAttribution(e.layer.getAttribution());
			}
		},

		_onLayerRemove: function (e) {
			if (e.layer.getAttribution) {
				this.removeAttribution(e.layer.getAttribution());
			}
		}
	});

	L.Map.mergeOptions({
		attributionControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.attributionControl) {
			this.attributionControl = (new L.Control.Attribution()).addTo(this);
		}
	});

	L.control.attribution = function (options) {
		return new L.Control.Attribution(options);
	};


	/*
	 * L.Control.Scale is used for displaying metric/imperial scale on the map.
	 */

	L.Control.Scale = L.Control.extend({
		options: {
			position: 'bottomleft',
			maxWidth: 100,
			metric: true,
			imperial: true,
			updateWhenIdle: false
		},

		onAdd: function (map) {
			this._map = map;

			var className = 'leaflet-control-scale',
			    container = L.DomUtil.create('div', className),
			    options = this.options;

			this._addScales(options, className, container);

			map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
			map.whenReady(this._update, this);

			return container;
		},

		onRemove: function (map) {
			map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		},

		_addScales: function (options, className, container) {
			if (options.metric) {
				this._mScale = L.DomUtil.create('div', className + '-line', container);
			}
			if (options.imperial) {
				this._iScale = L.DomUtil.create('div', className + '-line', container);
			}
		},

		_update: function () {
			var bounds = this._map.getBounds(),
			    centerLat = bounds.getCenter().lat,
			    halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
			    dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,

			    size = this._map.getSize(),
			    options = this.options,
			    maxMeters = 0;

			if (size.x > 0) {
				maxMeters = dist * (options.maxWidth / size.x);
			}

			this._updateScales(options, maxMeters);
		},

		_updateScales: function (options, maxMeters) {
			if (options.metric && maxMeters) {
				this._updateMetric(maxMeters);
			}

			if (options.imperial && maxMeters) {
				this._updateImperial(maxMeters);
			}
		},

		_updateMetric: function (maxMeters) {
			var meters = this._getRoundNum(maxMeters);

			this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
			this._mScale.innerHTML = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';
		},

		_updateImperial: function (maxMeters) {
			var maxFeet = maxMeters * 3.2808399,
			    scale = this._iScale,
			    maxMiles, miles, feet;

			if (maxFeet > 5280) {
				maxMiles = maxFeet / 5280;
				miles = this._getRoundNum(maxMiles);

				scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
				scale.innerHTML = miles + ' mi';

			} else {
				feet = this._getRoundNum(maxFeet);

				scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
				scale.innerHTML = feet + ' ft';
			}
		},

		_getScaleWidth: function (ratio) {
			return Math.round(this.options.maxWidth * ratio) - 10;
		},

		_getRoundNum: function (num) {
			var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
			    d = num / pow10;

			d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;

			return pow10 * d;
		}
	});

	L.control.scale = function (options) {
		return new L.Control.Scale(options);
	};


	/*
	 * L.Control.Layers is a control to allow users to switch between different layers on the map.
	 */

	L.Control.Layers = L.Control.extend({
		options: {
			collapsed: true,
			position: 'topright',
			autoZIndex: true
		},

		initialize: function (baseLayers, overlays, options) {
			L.setOptions(this, options);

			this._layers = {};
			this._lastZIndex = 0;
			this._handlingClick = false;

			for (var i in baseLayers) {
				this._addLayer(baseLayers[i], i);
			}

			for (i in overlays) {
				this._addLayer(overlays[i], i, true);
			}
		},

		onAdd: function (map) {
			this._initLayout();
			this._update();

			map
			    .on('layeradd', this._onLayerChange, this)
			    .on('layerremove', this._onLayerChange, this);

			return this._container;
		},

		onRemove: function (map) {
			map
			    .off('layeradd', this._onLayerChange, this)
			    .off('layerremove', this._onLayerChange, this);
		},

		addBaseLayer: function (layer, name) {
			this._addLayer(layer, name);
			this._update();
			return this;
		},

		addOverlay: function (layer, name) {
			this._addLayer(layer, name, true);
			this._update();
			return this;
		},

		removeLayer: function (layer) {
			var id = L.stamp(layer);
			delete this._layers[id];
			this._update();
			return this;
		},

		_initLayout: function () {
			var className = 'leaflet-control-layers',
			    container = this._container = L.DomUtil.create('div', className);

			//Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
			container.setAttribute('aria-haspopup', true);

			if (!L.Browser.touch) {
				L.DomEvent
					.disableClickPropagation(container)
					.disableScrollPropagation(container);
			} else {
				L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
			}

			var form = this._form = L.DomUtil.create('form', className + '-list');

			if (this.options.collapsed) {
				if (!L.Browser.android) {
					L.DomEvent
					    .on(container, 'mouseover', this._expand, this)
					    .on(container, 'mouseout', this._collapse, this);
				}
				var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
				link.href = '#';
				link.title = 'Layers';

				if (L.Browser.touch) {
					L.DomEvent
					    .on(link, 'click', L.DomEvent.stop)
					    .on(link, 'click', this._expand, this);
				}
				else {
					L.DomEvent.on(link, 'focus', this._expand, this);
				}
				//Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
				L.DomEvent.on(form, 'click', function () {
					setTimeout(L.bind(this._onInputClick, this), 0);
				}, this);

				this._map.on('click', this._collapse, this);
				// TODO keyboard accessibility
			} else {
				this._expand();
			}

			this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
			this._separator = L.DomUtil.create('div', className + '-separator', form);
			this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

			container.appendChild(form);
		},

		_addLayer: function (layer, name, overlay) {
			var id = L.stamp(layer);

			this._layers[id] = {
				layer: layer,
				name: name,
				overlay: overlay
			};

			if (this.options.autoZIndex && layer.setZIndex) {
				this._lastZIndex++;
				layer.setZIndex(this._lastZIndex);
			}
		},

		_update: function () {
			if (!this._container) {
				return;
			}

			this._baseLayersList.innerHTML = '';
			this._overlaysList.innerHTML = '';

			var baseLayersPresent = false,
			    overlaysPresent = false,
			    i, obj;

			for (i in this._layers) {
				obj = this._layers[i];
				this._addItem(obj);
				overlaysPresent = overlaysPresent || obj.overlay;
				baseLayersPresent = baseLayersPresent || !obj.overlay;
			}

			this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
		},

		_onLayerChange: function (e) {
			var obj = this._layers[L.stamp(e.layer)];

			if (!obj) { return; }

			if (!this._handlingClick) {
				this._update();
			}

			var type = obj.overlay ?
				(e.type === 'layeradd' ? 'overlayadd' : 'overlayremove') :
				(e.type === 'layeradd' ? 'baselayerchange' : null);

			if (type) {
				this._map.fire(type, obj);
			}
		},

		// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
		_createRadioElement: function (name, checked) {

			var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';
			if (checked) {
				radioHtml += ' checked="checked"';
			}
			radioHtml += '/>';

			var radioFragment = document.createElement('div');
			radioFragment.innerHTML = radioHtml;

			return radioFragment.firstChild;
		},

		_addItem: function (obj) {
			var label = document.createElement('label'),
			    input,
			    checked = this._map.hasLayer(obj.layer);

			if (obj.overlay) {
				input = document.createElement('input');
				input.type = 'checkbox';
				input.className = 'leaflet-control-layers-selector';
				input.defaultChecked = checked;
			} else {
				input = this._createRadioElement('leaflet-base-layers', checked);
			}

			input.layerId = L.stamp(obj.layer);

			L.DomEvent.on(input, 'click', this._onInputClick, this);

			var name = document.createElement('span');
			name.innerHTML = ' ' + obj.name;

			label.appendChild(input);
			label.appendChild(name);

			var container = obj.overlay ? this._overlaysList : this._baseLayersList;
			container.appendChild(label);

			return label;
		},

		_onInputClick: function () {
			var i, input, obj,
			    inputs = this._form.getElementsByTagName('input'),
			    inputsLen = inputs.length;

			this._handlingClick = true;

			for (i = 0; i < inputsLen; i++) {
				input = inputs[i];
				obj = this._layers[input.layerId];

				if (input.checked && !this._map.hasLayer(obj.layer)) {
					this._map.addLayer(obj.layer);

				} else if (!input.checked && this._map.hasLayer(obj.layer)) {
					this._map.removeLayer(obj.layer);
				}
			}

			this._handlingClick = false;

			this._refocusOnMap();
		},

		_expand: function () {
			L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
		},

		_collapse: function () {
			this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
		}
	});

	L.control.layers = function (baseLayers, overlays, options) {
		return new L.Control.Layers(baseLayers, overlays, options);
	};


	/*
	 * L.PosAnimation is used by Leaflet internally for pan animations.
	 */

	L.PosAnimation = L.Class.extend({
		includes: L.Mixin.Events,

		run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._newPos = newPos;

			this.fire('start');

			el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) +
			        's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';

			L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
			L.DomUtil.setPosition(el, newPos);

			// toggle reflow, Chrome flickers for some reason if you don't do this
			L.Util.falseFn(el.offsetWidth);

			// there's no native way to track value updates of transitioned properties, so we imitate this
			this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
		},

		stop: function () {
			if (!this._inProgress) { return; }

			// if we just removed the transition property, the element would jump to its final position,
			// so we need to make it stay at the current position

			L.DomUtil.setPosition(this._el, this._getPos());
			this._onTransitionEnd();
			L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
		},

		_onStep: function () {
			var stepPos = this._getPos();
			if (!stepPos) {
				this._onTransitionEnd();
				return;
			}
			// jshint camelcase: false
			// make L.DomUtil.getPosition return intermediate position value during animation
			this._el._leaflet_pos = stepPos;

			this.fire('step');
		},

		// you can't easily get intermediate values of properties animated with CSS3 Transitions,
		// we need to parse computed style (in case of transform it returns matrix string)

		_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,

		_getPos: function () {
			var left, top, matches,
			    el = this._el,
			    style = window.getComputedStyle(el);

			if (L.Browser.any3d) {
				matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
				if (!matches) { return; }
				left = parseFloat(matches[1]);
				top  = parseFloat(matches[2]);
			} else {
				left = parseFloat(style.left);
				top  = parseFloat(style.top);
			}

			return new L.Point(left, top, true);
		},

		_onTransitionEnd: function () {
			L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

			if (!this._inProgress) { return; }
			this._inProgress = false;

			this._el.style[L.DomUtil.TRANSITION] = '';

			// jshint camelcase: false
			// make sure L.DomUtil.getPosition returns the final position value after animation
			this._el._leaflet_pos = this._newPos;

			clearInterval(this._stepTimer);

			this.fire('step').fire('end');
		}

	});


	/*
	 * Extends L.Map to handle panning animations.
	 */

	L.Map.include({

		setView: function (center, zoom, options) {

			zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
			center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
			options = options || {};

			if (this._panAnim) {
				this._panAnim.stop();
			}

			if (this._loaded && !options.reset && options !== true) {

				if (options.animate !== undefined) {
					options.zoom = L.extend({animate: options.animate}, options.zoom);
					options.pan = L.extend({animate: options.animate}, options.pan);
				}

				// try animating pan or zoom
				var animated = (this._zoom !== zoom) ?
					this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
					this._tryAnimatedPan(center, options.pan);

				if (animated) {
					// prevent resize handler call, the view will refresh after animation anyway
					clearTimeout(this._sizeTimer);
					return this;
				}
			}

			// animation didn't start, just reset the map view
			this._resetView(center, zoom);

			return this;
		},

		panBy: function (offset, options) {
			offset = L.point(offset).round();
			options = options || {};

			if (!offset.x && !offset.y) {
				return this;
			}

			if (!this._panAnim) {
				this._panAnim = new L.PosAnimation();

				this._panAnim.on({
					'step': this._onPanTransitionStep,
					'end': this._onPanTransitionEnd
				}, this);
			}

			// don't fire movestart if animating inertia
			if (!options.noMoveStart) {
				this.fire('movestart');
			}

			// animate pan unless animate: false specified
			if (options.animate !== false) {
				L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

				var newPos = this._getMapPanePos().subtract(offset);
				this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
			} else {
				this._rawPanBy(offset);
				this.fire('move').fire('moveend');
			}

			return this;
		},

		_onPanTransitionStep: function () {
			this.fire('move');
		},

		_onPanTransitionEnd: function () {
			L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
			this.fire('moveend');
		},

		_tryAnimatedPan: function (center, options) {
			// difference between the new and current centers in pixels
			var offset = this._getCenterOffset(center)._floor();

			// don't animate too far unless animate: true specified in options
			if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

			this.panBy(offset, options);

			return true;
		}
	});


	/*
	 * L.PosAnimation fallback implementation that powers Leaflet pan animations
	 * in browsers that don't support CSS3 Transitions.
	 */

	L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({

		run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._duration = duration || 0.25;
			this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

			this._startPos = L.DomUtil.getPosition(el);
			this._offset = newPos.subtract(this._startPos);
			this._startTime = +new Date();

			this.fire('start');

			this._animate();
		},

		stop: function () {
			if (!this._inProgress) { return; }

			this._step();
			this._complete();
		},

		_animate: function () {
			// animation loop
			this._animId = L.Util.requestAnimFrame(this._animate, this);
			this._step();
		},

		_step: function () {
			var elapsed = (+new Date()) - this._startTime,
			    duration = this._duration * 1000;

			if (elapsed < duration) {
				this._runFrame(this._easeOut(elapsed / duration));
			} else {
				this._runFrame(1);
				this._complete();
			}
		},

		_runFrame: function (progress) {
			var pos = this._startPos.add(this._offset.multiplyBy(progress));
			L.DomUtil.setPosition(this._el, pos);

			this.fire('step');
		},

		_complete: function () {
			L.Util.cancelAnimFrame(this._animId);

			this._inProgress = false;
			this.fire('end');
		},

		_easeOut: function (t) {
			return 1 - Math.pow(1 - t, this._easeOutPower);
		}
	});


	/*
	 * Extends L.Map to handle zoom animations.
	 */

	L.Map.mergeOptions({
		zoomAnimation: true,
		zoomAnimationThreshold: 4
	});

	if (L.DomUtil.TRANSITION) {

		L.Map.addInitHook(function () {
			// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
			this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION &&
					L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera;

			// zoom transitions run with the same duration for all layers, so if one of transitionend events
			// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
			if (this._zoomAnimated) {
				L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
			}
		});
	}

	L.Map.include(!L.DomUtil.TRANSITION ? {} : {

		_catchTransitionEnd: function (e) {
			if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
				this._onZoomTransitionEnd();
			}
		},

		_nothingToAnimate: function () {
			return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
		},

		_tryAnimatedZoom: function (center, zoom, options) {

			if (this._animatingZoom) { return true; }

			options = options || {};

			// don't animate if disabled, not supported or zoom difference is too large
			if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
			        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

			// offset is the pixel coords of the zoom origin relative to the current center
			var scale = this.getZoomScale(zoom),
			    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
				origin = this._getCenterLayerPoint()._add(offset);

			// don't animate if the zoom origin isn't within one screen from the current center, unless forced
			if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

			this
			    .fire('movestart')
			    .fire('zoomstart');

			this._animateZoom(center, zoom, origin, scale, null, true);

			return true;
		},

		_animateZoom: function (center, zoom, origin, scale, delta, backwards, forTouchZoom) {

			if (!forTouchZoom) {
				this._animatingZoom = true;
			}

			// put transform transition on all layers with leaflet-zoom-animated class
			L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			// disable any dragging during animation
			if (L.Draggable) {
				L.Draggable._disabled = true;
			}

			L.Util.requestAnimFrame(function () {
				this.fire('zoomanim', {
					center: center,
					zoom: zoom,
					origin: origin,
					scale: scale,
					delta: delta,
					backwards: backwards
				});
			}, this);
		},

		_onZoomTransitionEnd: function () {

			this._animatingZoom = false;

			L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

			this._resetView(this._animateToCenter, this._animateToZoom, true, true);

			if (L.Draggable) {
				L.Draggable._disabled = false;
			}
		}
	});


	/*
		Zoom animation logic for L.TileLayer.
	*/

	L.TileLayer.include({
		_animateZoom: function (e) {
			if (!this._animating) {
				this._animating = true;
				this._prepareBgBuffer();
			}

			var bg = this._bgBuffer,
			    transform = L.DomUtil.TRANSFORM,
			    initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
			    scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);

			bg.style[transform] = e.backwards ?
					scaleStr + ' ' + initialTransform :
					initialTransform + ' ' + scaleStr;
		},

		_endZoomAnim: function () {
			var front = this._tileContainer,
			    bg = this._bgBuffer;

			front.style.visibility = '';
			front.parentNode.appendChild(front); // Bring to fore

			// force reflow
			L.Util.falseFn(bg.offsetWidth);

			this._animating = false;
		},

		_clearBgBuffer: function () {
			var map = this._map;

			if (map && !map._animatingZoom && !map.touchZoom._zooming) {
				this._bgBuffer.innerHTML = '';
				this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
			}
		},

		_prepareBgBuffer: function () {

			var front = this._tileContainer,
			    bg = this._bgBuffer;

			// if foreground layer doesn't have many tiles but bg layer does,
			// keep the existing bg layer and just zoom it some more

			var bgLoaded = this._getLoadedTilesPercentage(bg),
			    frontLoaded = this._getLoadedTilesPercentage(front);

			if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {

				front.style.visibility = 'hidden';
				this._stopLoadingImages(front);
				return;
			}

			// prepare the buffer to become the front tile pane
			bg.style.visibility = 'hidden';
			bg.style[L.DomUtil.TRANSFORM] = '';

			// switch out the current layer to be the new bg layer (and vice-versa)
			this._tileContainer = bg;
			bg = this._bgBuffer = front;

			this._stopLoadingImages(bg);

			//prevent bg buffer from clearing right after zoom
			clearTimeout(this._clearBgBufferTimer);
		},

		_getLoadedTilesPercentage: function (container) {
			var tiles = container.getElementsByTagName('img'),
			    i, len, count = 0;

			for (i = 0, len = tiles.length; i < len; i++) {
				if (tiles[i].complete) {
					count++;
				}
			}
			return count / len;
		},

		// stops loading all tiles in the background layer
		_stopLoadingImages: function (container) {
			var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
			    i, len, tile;

			for (i = 0, len = tiles.length; i < len; i++) {
				tile = tiles[i];

				if (!tile.complete) {
					tile.onload = L.Util.falseFn;
					tile.onerror = L.Util.falseFn;
					tile.src = L.Util.emptyImageUrl;

					tile.parentNode.removeChild(tile);
				}
			}
		}
	});


	/*
	 * Provides L.Map with convenient shortcuts for using browser geolocation features.
	 */

	L.Map.include({
		_defaultLocateOptions: {
			watch: false,
			setView: false,
			maxZoom: Infinity,
			timeout: 10000,
			maximumAge: 0,
			enableHighAccuracy: false
		},

		locate: function (/*Object*/ options) {

			options = this._locateOptions = L.extend(this._defaultLocateOptions, options);

			if (!navigator.geolocation) {
				this._handleGeolocationError({
					code: 0,
					message: 'Geolocation not supported.'
				});
				return this;
			}

			var onResponse = L.bind(this._handleGeolocationResponse, this),
				onError = L.bind(this._handleGeolocationError, this);

			if (options.watch) {
				this._locationWatchId =
				        navigator.geolocation.watchPosition(onResponse, onError, options);
			} else {
				navigator.geolocation.getCurrentPosition(onResponse, onError, options);
			}
			return this;
		},

		stopLocate: function () {
			if (navigator.geolocation) {
				navigator.geolocation.clearWatch(this._locationWatchId);
			}
			if (this._locateOptions) {
				this._locateOptions.setView = false;
			}
			return this;
		},

		_handleGeolocationError: function (error) {
			var c = error.code,
			    message = error.message ||
			            (c === 1 ? 'permission denied' :
			            (c === 2 ? 'position unavailable' : 'timeout'));

			if (this._locateOptions.setView && !this._loaded) {
				this.fitWorld();
			}

			this.fire('locationerror', {
				code: c,
				message: 'Geolocation error: ' + message + '.'
			});
		},

		_handleGeolocationResponse: function (pos) {
			var lat = pos.coords.latitude,
			    lng = pos.coords.longitude,
			    latlng = new L.LatLng(lat, lng),

			    latAccuracy = 180 * pos.coords.accuracy / 40075017,
			    lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),

			    bounds = L.latLngBounds(
			            [lat - latAccuracy, lng - lngAccuracy],
			            [lat + latAccuracy, lng + lngAccuracy]),

			    options = this._locateOptions;

			if (options.setView) {
				var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
				this.setView(latlng, zoom);
			}

			var data = {
				latlng: latlng,
				bounds: bounds,
				timestamp: pos.timestamp
			};

			for (var i in pos.coords) {
				if (typeof pos.coords[i] === 'number') {
					data[i] = pos.coords[i];
				}
			}

			this.fire('locationfound', data);
		}
	});


	}(window, document));

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bounds = __webpack_require__(113);

	var _bounds2 = _interopRequireDefault(_bounds);

	var _latlng = __webpack_require__(115);

	var _latlng2 = _interopRequireDefault(_latlng);

	var _latlngList = __webpack_require__(114);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	exports['default'] = { bounds: _bounds2['default'], latlng: _latlng2['default'], latlngList: _latlngList2['default'] };
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(111);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _latlngList = __webpack_require__(114);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	exports['default'] = _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.instanceOf(_leaflet2['default'].LatLngBounds), _latlngList2['default']]);
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _latlng = __webpack_require__(115);

	var _latlng2 = _interopRequireDefault(_latlng);

	exports['default'] = _react.PropTypes.arrayOf(_latlng2['default']);
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(5);

	exports['default'] = _react.PropTypes.oneOfType([
	// [Number, Number]
	_react.PropTypes.arrayOf(_react.PropTypes.number),
	// {lat: Number, lng: Number}
	_react.PropTypes.shape({
	  lat: _react.PropTypes.number,
	  lng: _react.PropTypes.number
	}),
	// {lat: Number, lon: Number}
	_react.PropTypes.shape({
	  lat: _react.PropTypes.number,
	  lon: _react.PropTypes.number
	})]);
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _MapLayer2 = __webpack_require__(43);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	var BaseTileLayer = (function (_MapLayer) {
	  function BaseTileLayer() {
	    _classCallCheck(this, BaseTileLayer);

	    if (_MapLayer != null) {
	      _MapLayer.apply(this, arguments);
	    }
	  }

	  _inherits(BaseTileLayer, _MapLayer);

	  _createClass(BaseTileLayer, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _props = this.props;
	      var opacity = _props.opacity;
	      var zIndex = _props.zIndex;

	      if (opacity && opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(opacity);
	      }
	      if (zIndex && zIndex !== prevProps.zIndex) {
	        this.leafletElement.setZIndex(zIndex);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      opacity: _react.PropTypes.number,
	      zIndex: _react.PropTypes.number
	    },
	    enumerable: true
	  }]);

	  return BaseTileLayer;
	})(_MapLayer3['default']);

	exports['default'] = BaseTileLayer;
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(111);

	var _BaseTileLayer2 = __webpack_require__(116);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	var CanvasTileLayer = (function (_BaseTileLayer) {
	  function CanvasTileLayer() {
	    _classCallCheck(this, CanvasTileLayer);

	    if (_BaseTileLayer != null) {
	      _BaseTileLayer.apply(this, arguments);
	    }
	  }

	  _inherits(CanvasTileLayer, _BaseTileLayer);

	  _createClass(CanvasTileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(CanvasTileLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;

	      var props = _objectWithoutProperties(_props, ['map']);

	      this.leafletElement = _leaflet.tileLayer.canvas(props);
	    }
	  }]);

	  return CanvasTileLayer;
	})(_BaseTileLayer3['default']);

	exports['default'] = CanvasTileLayer;
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _typesLatlng = __webpack_require__(115);

	var _typesLatlng2 = _interopRequireDefault(_typesLatlng);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var Circle = (function (_PopupContainer) {
	  function Circle() {
	    _classCallCheck(this, Circle);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(Circle, _PopupContainer);

	  _createClass(Circle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Circle.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var center = _props.center;
	      var map = _props.map;
	      var radius = _props.radius;

	      var props = _objectWithoutProperties(_props, ['center', 'map', 'radius']);

	      this.leafletElement = (0, _leaflet.circle)(center, radius, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.center !== prevProps.center) {
	        this.leafletElement.setLatLng(this.props.center);
	      }
	      if (this.props.radius !== prevProps.radius) {
	        this.leafletElement.setRadius(this.props.radius);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      center: _typesLatlng2['default'].isRequired,
	      radius: _react.PropTypes.number.isRequired
	    },
	    enumerable: true
	  }]);

	  return Circle;
	})(_PopupContainer3['default']);

	exports['default'] = Circle;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _MapLayer2 = __webpack_require__(43);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	var PopupContainer = (function (_MapLayer) {
	  function PopupContainer() {
	    _classCallCheck(this, PopupContainer);

	    if (_MapLayer != null) {
	      _MapLayer.apply(this, arguments);
	    }
	  }

	  _inherits(PopupContainer, _MapLayer);

	  _createClass(PopupContainer, [{
	    key: 'render',
	    value: function render() {
	      var children = this.getClonedChildrenWithMap({
	        popupContainer: this.leafletElement
	      });
	      return _react2['default'].createElement(
	        'div',
	        { style: { display: 'none' } },
	        children
	      );
	    }
	  }]);

	  return PopupContainer;
	})(_MapLayer3['default']);

	exports['default'] = PopupContainer;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _typesLatlng = __webpack_require__(115);

	var _typesLatlng2 = _interopRequireDefault(_typesLatlng);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var CircleMarker = (function (_PopupContainer) {
	  function CircleMarker() {
	    _classCallCheck(this, CircleMarker);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(CircleMarker, _PopupContainer);

	  _createClass(CircleMarker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(CircleMarker.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var center = _props.center;
	      var map = _props.map;

	      var props = _objectWithoutProperties(_props, ['center', 'map']);

	      this.leafletElement = (0, _leaflet.circleMarker)(center, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.center !== prevProps.center) {
	        this.leafletElement.setLatLng(this.props.center);
	      }
	      if (this.props.radius !== prevProps.radius) {
	        this.leafletElement.setRadius(this.props.radius);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      center: _typesLatlng2['default'].isRequired,
	      radius: _react.PropTypes.number
	    },
	    enumerable: true
	  }]);

	  return CircleMarker;
	})(_PopupContainer3['default']);

	exports['default'] = CircleMarker;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var FeatureGroup = (function (_PopupContainer) {
	  function FeatureGroup() {
	    _classCallCheck(this, FeatureGroup);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(FeatureGroup, _PopupContainer);

	  _createClass(FeatureGroup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var layers = _props.layers;
	      var map = _props.map;

	      var props = _objectWithoutProperties(_props, ['layers', 'map']);

	      this.leafletElement = (0, _leaflet.featureGroup)(layers);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      layers: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return FeatureGroup;
	})(_PopupContainer3['default']);

	exports['default'] = FeatureGroup;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var GeoJson = (function (_PopupContainer) {
	  function GeoJson() {
	    _classCallCheck(this, GeoJson);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(GeoJson, _PopupContainer);

	  _createClass(GeoJson, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(GeoJson.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var data = _props.data;
	      var map = _props.map;

	      var props = _objectWithoutProperties(_props, ['data', 'map']);

	      this.leafletElement = (0, _leaflet.geoJson)(data, props);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      data: _react.PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return GeoJson;
	})(_PopupContainer3['default']);

	exports['default'] = GeoJson;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _typesBounds = __webpack_require__(113);

	var _typesBounds2 = _interopRequireDefault(_typesBounds);

	var _MapLayer2 = __webpack_require__(43);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	var ImageOverlay = (function (_MapLayer) {
	  function ImageOverlay() {
	    _classCallCheck(this, ImageOverlay);

	    if (_MapLayer != null) {
	      _MapLayer.apply(this, arguments);
	    }
	  }

	  _inherits(ImageOverlay, _MapLayer);

	  _createClass(ImageOverlay, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(ImageOverlay.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var bounds = _props.bounds;
	      var map = _props.map;
	      var url = _props.url;

	      var props = _objectWithoutProperties(_props, ['bounds', 'map', 'url']);

	      this.leafletElement = (0, _leaflet.imageOverlay)(url, bounds, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.url !== prevProps.url) {
	        this.leafletElement.setUrl(this.props.url);
	      }
	      if (this.props.opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(this.props.opacity);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      attribution: _react.PropTypes.string,
	      bounds: _typesBounds2['default'].isRequired,
	      opacity: _react.PropTypes.number,
	      url: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return ImageOverlay;
	})(_MapLayer3['default']);

	exports['default'] = ImageOverlay;
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodashLangIsArray = __webpack_require__(58);

	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);

	var _lodashUtilityUniqueId = __webpack_require__(125);

	var _lodashUtilityUniqueId2 = _interopRequireDefault(_lodashUtilityUniqueId);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(111);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _typesBounds = __webpack_require__(113);

	var _typesBounds2 = _interopRequireDefault(_typesBounds);

	var _typesLatlng = __webpack_require__(115);

	var _typesLatlng2 = _interopRequireDefault(_typesLatlng);

	var _MapComponent2 = __webpack_require__(68);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	var normalizeCenter = function normalizeCenter(pos) {
	  return (0, _lodashLangIsArray2['default'])(pos) ? pos : [pos.lat, pos.lng || pos.lon];
	};

	var Map = (function (_MapComponent) {
	  function Map(props) {
	    _classCallCheck(this, Map);

	    _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      id: props.id || (0, _lodashUtilityUniqueId2['default'])('map')
	    };
	  }

	  _inherits(Map, _MapComponent);

	  _createClass(Map, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.leafletElement = _leaflet2['default'].map(this.state.id, this.props);
	      _get(Object.getPrototypeOf(Map.prototype), 'componentDidMount', this).call(this);
	      this.setState({ map: this.leafletElement });
	    }
	  }, {
	    key: 'shouldUpdateCenter',
	    value: function shouldUpdateCenter(next, prev) {
	      if (!prev) return true;
	      next = normalizeCenter(next);
	      prev = normalizeCenter(prev);
	      return next[0] !== prev[0] || next[1] !== prev[1];
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _props = this.props;
	      var center = _props.center;
	      var zoom = _props.zoom;

	      if (center && this.shouldUpdateCenter(center, prevProps.center)) {
	        this.leafletElement.setView(center, zoom, { animate: false });
	      } else if (zoom && zoom !== prevProps.zoom) {
	        this.leafletElement.setZoom(zoom);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Object.getPrototypeOf(Map.prototype), 'componentWillUnmount', this).call(this);
	      this.leafletElement.remove();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var map = this.leafletElement;
	      var children = map ? _react2['default'].Children.map(this.props.children, function (child) {
	        return child ? _react2['default'].cloneElement(child, { map: map }) : null;
	      }) : null;

	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.className, id: this.state.id, style: this.props.style },
	        children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      center: _typesLatlng2['default'],
	      className: _react.PropTypes.string,
	      id: _react.PropTypes.string,
	      maxBounds: _typesBounds2['default'],
	      maxZoom: _react.PropTypes.number,
	      minZoom: _react.PropTypes.number,
	      style: _react.PropTypes.object,
	      zoom: _react.PropTypes.number
	    },
	    enumerable: true
	  }]);

	  return Map;
	})(_MapComponent3['default']);

	exports['default'] = Map;
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(107);

	/** Used to generate unique IDs. */
	var idCounter = 0;

	/**
	 * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {string} [prefix] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return baseToString(prefix) + id;
	}

	module.exports = uniqueId;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _typesLatlng = __webpack_require__(115);

	var _typesLatlng2 = _interopRequireDefault(_typesLatlng);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var Marker = (function (_PopupContainer) {
	  function Marker() {
	    _classCallCheck(this, Marker);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(Marker, _PopupContainer);

	  _createClass(Marker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Marker.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var position = _props.position;

	      var props = _objectWithoutProperties(_props, ['map', 'position']);

	      this.leafletElement = (0, _leaflet.marker)(position, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.position !== prevProps.position) {
	        this.leafletElement.setLatLng(this.props.position);
	      }
	      if (this.props.icon !== prevProps.icon) {
	        this.leafletElement.setIcon(this.props.icon);
	      }
	      if (this.props.zIndexOffset !== prevProps.zIndexOffset) {
	        this.leafletElement.setZIndexOffset(this.props.zIndexOffset);
	      }
	      if (this.props.opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(this.props.opacity);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _typesLatlng2['default'].isRequired,
	      icon: _react.PropTypes.instanceOf(_leaflet.Icon),
	      zIndexOffset: _react.PropTypes.number,
	      opacity: _react.PropTypes.number
	    },
	    enumerable: true
	  }]);

	  return Marker;
	})(_PopupContainer3['default']);

	exports['default'] = Marker;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _typesLatlngList = __webpack_require__(114);

	var _typesLatlngList2 = _interopRequireDefault(_typesLatlngList);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var MultiPolygon = (function (_PopupContainer) {
	  function MultiPolygon() {
	    _classCallCheck(this, MultiPolygon);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(MultiPolygon, _PopupContainer);

	  _createClass(MultiPolygon, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(MultiPolygon.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var polygons = _props.polygons;

	      var props = _objectWithoutProperties(_props, ['map', 'polygons']);

	      this.leafletElement = (0, _leaflet.multiPolygon)(polygons, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.polygons !== prevProps.polygons) {
	        this.leafletElement.setLatLngs(this.props.polygons);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      polygons: _react.PropTypes.arrayOf(_typesLatlngList2['default']).isRequired
	    },
	    enumerable: true
	  }]);

	  return MultiPolygon;
	})(_PopupContainer3['default']);

	exports['default'] = MultiPolygon;
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _typesLatlngList = __webpack_require__(114);

	var _typesLatlngList2 = _interopRequireDefault(_typesLatlngList);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var MultiPolyline = (function (_PopupContainer) {
	  function MultiPolyline() {
	    _classCallCheck(this, MultiPolyline);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(MultiPolyline, _PopupContainer);

	  _createClass(MultiPolyline, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(MultiPolyline.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var polylines = _props.polylines;

	      var props = _objectWithoutProperties(_props, ['map', 'polylines']);

	      this.leafletElement = (0, _leaflet.multiPolyline)(polylines, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.polylines !== prevProps.polylines) {
	        this.leafletElement.setLatLngs(this.props.polylines);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      polylines: _react.PropTypes.arrayOf(_typesLatlngList2['default']).isRequired
	    },
	    enumerable: true
	  }]);

	  return MultiPolyline;
	})(_PopupContainer3['default']);

	exports['default'] = MultiPolyline;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(111);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _typesLatlngList = __webpack_require__(114);

	var _typesLatlngList2 = _interopRequireDefault(_typesLatlngList);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var Polygon = (function (_PopupContainer) {
	  function Polygon() {
	    _classCallCheck(this, Polygon);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(Polygon, _PopupContainer);

	  _createClass(Polygon, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Polygon.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var positions = _props.positions;

	      var props = _objectWithoutProperties(_props, ['map', 'positions']);

	      this.leafletElement = _leaflet2['default'].polygon(positions, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.positions !== prevProps.positions) {
	        this.leafletElement.setLatLngs(this.props.positions);
	      }
	    }
	  }]);

	  return Polygon;
	})(_PopupContainer3['default']);

	exports['default'] = Polygon;

	Polygon.propTypes = {
	  positions: _typesLatlngList2['default'].isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(111);

	var _typesLatlngList = __webpack_require__(114);

	var _typesLatlngList2 = _interopRequireDefault(_typesLatlngList);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var Polyline = (function (_PopupContainer) {
	  function Polyline() {
	    _classCallCheck(this, Polyline);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(Polyline, _PopupContainer);

	  _createClass(Polyline, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Polyline.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var positions = _props.positions;

	      var props = _objectWithoutProperties(_props, ['map', 'positions']);

	      this.leafletElement = (0, _leaflet.polyline)(positions, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.positions !== prevProps.positions) {
	        this.leafletElement.setLatLngs(this.props.positions);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      positions: _typesLatlngList2['default'].isRequired
	    },
	    enumerable: true
	  }]);

	  return Polyline;
	})(_PopupContainer3['default']);

	exports['default'] = Polyline;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(111);

	var _typesLatlng = __webpack_require__(115);

	var _typesLatlng2 = _interopRequireDefault(_typesLatlng);

	var _MapComponent2 = __webpack_require__(68);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	var Popup = (function (_MapComponent) {
	  function Popup() {
	    _classCallCheck(this, Popup);

	    if (_MapComponent != null) {
	      _MapComponent.apply(this, arguments);
	    }
	  }

	  _inherits(Popup, _MapComponent);

	  _createClass(Popup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Popup.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var children = _props.children;
	      var map = _props.map;

	      var props = _objectWithoutProperties(_props, ['children', 'map']);

	      this.leafletElement = (0, _leaflet.popup)(props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var map = _props2.map;
	      var popupContainer = _props2.popupContainer;
	      var position = _props2.position;

	      var props = _objectWithoutProperties(_props2, ['children', 'map', 'popupContainer', 'position']);

	      if (children !== prevProps.children) {
	        var content = _react2['default'].renderToStaticMarkup(children);
	        if (popupContainer) {
	          popupContainer.bindPopup(content, props);
	        } else {
	          var el = this.leafletElement;
	          el.setContent(content);
	          if (position !== prevProps.position) el.setLatLng(position);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Object.getPrototypeOf(Popup.prototype), 'componentWillUnmount', this).call(this);
	      this.props.map.removeLayer(this.leafletElement);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var children = _props3.children;
	      var map = _props3.map;
	      var popupContainer = _props3.popupContainer;
	      var position = _props3.position;

	      var props = _objectWithoutProperties(_props3, ['children', 'map', 'popupContainer', 'position']);

	      if (children) {
	        var content = _react2['default'].renderToStaticMarkup(children);
	        // Attach to container component
	        if (popupContainer) {
	          popupContainer.bindPopup(content, props);
	          return null;
	        }
	        // Attach to a Map
	        var el = this.leafletElement;
	        el.setContent(content);
	        if (position) el.setLatLng(position);
	        el.openOn(map);
	      }
	      return null;
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      position: _typesLatlng2['default']
	    },
	    enumerable: true
	  }]);

	  return Popup;
	})(_MapComponent3['default']);

	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(111);

	var _typesBounds = __webpack_require__(113);

	var _typesBounds2 = _interopRequireDefault(_typesBounds);

	var _PopupContainer2 = __webpack_require__(119);

	var _PopupContainer3 = _interopRequireDefault(_PopupContainer2);

	var Rectangle = (function (_PopupContainer) {
	  function Rectangle() {
	    _classCallCheck(this, Rectangle);

	    if (_PopupContainer != null) {
	      _PopupContainer.apply(this, arguments);
	    }
	  }

	  _inherits(Rectangle, _PopupContainer);

	  _createClass(Rectangle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Rectangle.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var bounds = _props.bounds;
	      var map = _props.map;

	      var props = _objectWithoutProperties(_props, ['bounds', 'map']);

	      this.leafletElement = (0, _leaflet.rectangle)(bounds, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.bounds !== prevProps.bounds) {
	        this.leafletElement.setBounds(this.props.bounds);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      bounds: _typesBounds2['default'].isRequired
	    },
	    enumerable: true
	  }]);

	  return Rectangle;
	})(_PopupContainer3['default']);

	exports['default'] = Rectangle;
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _BaseTileLayer2 = __webpack_require__(116);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	var TileLayer = (function (_BaseTileLayer) {
	  function TileLayer() {
	    _classCallCheck(this, TileLayer);

	    if (_BaseTileLayer != null) {
	      _BaseTileLayer.apply(this, arguments);
	    }
	  }

	  _inherits(TileLayer, _BaseTileLayer);

	  _createClass(TileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(TileLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var url = _props.url;

	      var props = _objectWithoutProperties(_props, ['map', 'url']);

	      this.leafletElement = (0, _leaflet.tileLayer)(url, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var url = this.props.url;

	      if (url && url !== prevProps.url) {
	        this.leafletElement.setUrl(url);
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      url: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return TileLayer;
	})(_BaseTileLayer3['default']);

	exports['default'] = TileLayer;
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _leaflet = __webpack_require__(111);

	var _BaseTileLayer2 = __webpack_require__(116);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	var WMSTileLayer = (function (_BaseTileLayer) {
	  function WMSTileLayer() {
	    _classCallCheck(this, WMSTileLayer);

	    if (_BaseTileLayer != null) {
	      _BaseTileLayer.apply(this, arguments);
	    }
	  }

	  _inherits(WMSTileLayer, _BaseTileLayer);

	  _createClass(WMSTileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(WMSTileLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var map = _props.map;
	      var url = _props.url;

	      var props = _objectWithoutProperties(_props, ['map', 'url']);

	      this.leafletElement = _leaflet.tileLayer.wms(url, props);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      url: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return WMSTileLayer;
	})(_BaseTileLayer3['default']);

	exports['default'] = WMSTileLayer;
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _reactRouterLibLocation = __webpack_require__(19);

	var _reactRouterLibLocation2 = _interopRequireDefault(_reactRouterLibLocation);

	if (window.hasOwnProperty('vex')) {
	  vex.defaultOptions.className = 'vex-theme-flat-attack';
	}

	var onUpdate = function onUpdate(notReady) {
	  // cleanup (do not modify)
	  rubix_bootstrap.core.reset_globals_BANG_();
	  if (window.Rubix) window.Rubix.Cleanup();

	  Pace.restart();
	  if (window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	      'page': window.location.pathname + window.location.search + window.location.hash
	    });
	  }

	  if (!notReady) {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  }
	};

	var InitializeRouter = function InitializeRouter(routes) {
	  onUpdate(true);
	  var rootInstance = React.render(routes, document.getElementById('app-container'), function () {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });

	  // initialize react-hot-loader
	  if (false) {
	    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
	      getRootInstances: function getRootInstances() {
	        // Help React Hot Loader figure out the root component instances on the page:
	        return [rootInstance];
	      }
	    });
	  }
	};

	module.exports = function (routes) {
	  if ('document' in window) {
	    InitializeRouter(routes(true, onUpdate));
	  } else {
	    // called only server side!
	    if (false) {
	      global.StaticComponent = React.createClass({
	        displayName: 'StaticComponent',

	        render: function render() {
	          var Handler = null;
	          var location = new _reactRouterLibLocation2['default'](this.props.path, this.props.query);
	          ReactBootstrap.Dispatcher.removeAllListeners();
	          rubix_bootstrap.core.reset_globals_BANG_();
	          _reactRouter.Router.run(routes(false), location, function (e, i, t) {
	            Handler = React.createElement(_reactRouter.Router, i);
	          });
	          return Handler;
	        }
	      });
	    } else {
	      return function () {
	        ReactBootstrap.Dispatcher.removeAllListeners();
	        rubix_bootstrap.core.reset_globals_BANG_();
	        return routes(false);
	      };
	    }
	  }
	};

/***/ }
/******/ ]);