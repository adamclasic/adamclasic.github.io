'use strict';

define("adamclasic.github.io/tests/acceptance/application-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | application', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("adamclasic.github.io/tests/helpers/ember-cli-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }
  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  }
  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }
  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }
  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */


  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }
  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireActionByName(component, actionName) {
    let action = component[actionName];
    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define("adamclasic.github.io/tests/integration/components/scroll-reveal-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | scroll-reveal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ScrollReveal />
      */
      {
        id: "Nl0K73l2",
        block: "{\"symbols\":[],\"statements\":[[5,\"scroll-reveal\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ScrollReveal>
              template block text
            </ScrollReveal>
          
      */
      {
        id: "fE8n/imt",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"scroll-reveal\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("adamclasic.github.io/tests/integration/components/tilt-element-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | tilt-element', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <TiltElement />
      */
      {
        id: "10m9bToi",
        block: "{\"symbols\":[],\"statements\":[[5,\"tilt-element\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <TiltElement>
              template block text
            </TiltElement>
          
      */
      {
        id: "WEJhcLxE",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"tilt-element\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("adamclasic.github.io/tests/integration/modifiers/jumpscroll-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | jumpscroll', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <div {{jumpscroll}}></div>
      */
      {
        id: "fwqEqSJS",
        block: "{\"symbols\":[],\"statements\":[[7,\"div\",false],[3,\"jumpscroll\"],[8],[9]],\"hasEval\":false}",
        meta: {}
      }));
      assert.ok(true);
    });
  });
});
define("adamclasic.github.io/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });
  QUnit.test('components/scroll-reveal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/scroll-reveal.js should pass ESLint\n\n');
  });
  QUnit.test('components/tilt-element.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tilt-element.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('modifiers/jumpscroll.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modifiers/jumpscroll.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-size.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-radius.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-radius.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-widths.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-widths.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/font-weights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/font-weights.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/fonts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/fonts.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/letter-spacing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/letter-spacing.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/line-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/line-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/negative-margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/negative-margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/opacity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/opacity.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/padding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/padding.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/screens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/screens.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/shadows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/shadows.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-fill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-fill.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-stroke.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-stroke.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/tailwind.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/tailwind.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-sizes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-sizes.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/z-index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/z-index.js should pass ESLint\n\n');
  });
  QUnit.test('utils/data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/data.js should pass ESLint\n\n');
  });
});
define("adamclasic.github.io/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('adamclasic.github.io/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adamclasic.github.io/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("adamclasic.github.io/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/scroll-reveal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/scroll-reveal-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/tilt-element-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tilt-element-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/modifiers/jumpscroll-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/modifiers/jumpscroll-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
});
define("adamclasic.github.io/tests/test-helper", ["adamclasic.github.io/app", "adamclasic.github.io/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("adamclasic.github.io/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('simplefolio-ember/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"simplefolio-ember","environment":"test","rootURL":"/","locationType":"none","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false},"_APPLICATION_TEMPLATE_WRAPPER":false,"_DEFAULT_ASYNC_OBSERVERS":true,"_JQUERY_INTEGRATION":false,"_TEMPLATE_ONLY_GLIMMER_COMPONENTS":true},"APP":{"LOG_ACTIVE_GENERATION":false,"LOG_VIEW_LOOKUPS":false,"rootElement":"#ember-testing","autoboot":false,"name":"adamclasic.github.io","version":"1.0.0+0a5b40b0"},"fontawesome":{"icons":{"free-brands-svg-icons":["twitter","codepen","linkedin","github"],"free-solid-svg-icons":["angle-up"]}},"exportApplicationGlobal":true}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

require('simplefolio-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
