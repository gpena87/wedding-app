import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DestroyRef,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgIf,
  NgModule,
  Observable,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Version,
  __objRest,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  assertInInjectionContext,
  booleanAttribute,
  computed,
  finalize,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  isPromise,
  isSubscribable,
  map,
  setClassMetadata,
  signal,
  takeUntil,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3BBM22J3.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "/api",
  spotifyPlaylistEmbedUrl: "https://open.spotify.com/embed/playlist/6IOJDEwrxWtqhVu6YN4POd?autoplay=1&utm_source=generator&si=e6ccdc8a3abb41fb&pt=4b98b175b38778ba2e587341823fabd7",
  spotifyCollaborativePlaylistUrl: "https://open.spotify.com/playlist/6IOJDEwrxWtqhVu6YN4POd?si=e6ccdc8a3abb41fb&pt=4b98b175b38778ba2e587341823fabd7"
};

// src/app/components/user-music/user-music.component.ts
var UserMusicComponent = class _UserMusicComponent {
  title = signal("Nuestra playlist de Spotify", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("Hemos creado una playlist especial en Spotify con canciones que significan mucho para nosotros. \xA1Esperamos que disfrutes escuch\xE1ndola tanto como nosotros disfrutamos seleccionando cada canci\xF3n!", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  sanitizer = inject(DomSanitizer);
  spotifyAutoplayEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.spotifyPlaylistEmbedUrl);
  spotifyCollaborativePlaylistUrl = environment.spotifyCollaborativePlaylistUrl;
  static \u0275fac = function UserMusicComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMusicComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMusicComponent, selectors: [["app-user-music"]], decls: 12, vars: 4, consts: [["id", "musica", 1, "mx-auto", "max-w-6xl", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "p-5", "text-center", "sm:p-8"], [1, "text-5xl", "font-semibold", "text-[#957845]", "sm:text-6xl"], [1, "mt-3", "text-[#957845]"], [1, "mt-8", "w-full", "max-w-sm", "mx-auto"], ["title", "Playlist de Spotify", "loading", "eager", "width", "100%", "height", "382", "frameborder", "0", "allowfullscreen", "", "allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", "referrerpolicy", "strict-origin-when-cross-origin", 1, "block", "w-full", "border-0", 3, "src"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "inline-flex", "w-full", "items-center", "justify-center", "gap-2", "rounded-full", "border", "border-[#1DB954]", "bg-transparent", "px-5", "py-3", "text-sm", "font-semibold", "tracking-wide", "text-[#1DB954]", "transition-colors", "duration-200", "hover:bg-[#1DB954]", "hover:text-white", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 496 512", "fill", "currentColor", "aria-hidden", "true", 1, "h-5", "w-5"], ["d", "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]], template: function UserMusicComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 4);
      \u0275\u0275domElement(7, "iframe", 5);
      \u0275\u0275domElementStart(8, "a", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(9, "svg", 7);
      \u0275\u0275domElement(10, "path", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11, " ABRIR PLAYLIST COLABORATIVA ");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("src", ctx.spotifyAutoplayEmbedUrl, \u0275\u0275sanitizeResourceUrl);
      \u0275\u0275advance();
      \u0275\u0275domProperty("href", ctx.spotifyCollaborativePlaylistUrl, \u0275\u0275sanitizeUrl);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMusicComponent, [{
    type: Component,
    args: [{ selector: "app-user-music", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section id="musica" class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">\n  <div class="p-5 text-center sm:p-8">\n    <h2 class="text-5xl font-semibold text-[#957845] sm:text-6xl">{{ title() }}</h2>\n    <p class="mt-3 text-[#957845]">{{ subtitle() }}</p>\n    <div class="mt-8 w-full max-w-sm mx-auto">\n      <iframe\n        title="Playlist de Spotify"\n        [src]="spotifyAutoplayEmbedUrl"\n        loading="eager"\n        width="100%"\n        height="382"\n        frameborder="0"\n        allowfullscreen=""\n        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"\n        referrerpolicy="strict-origin-when-cross-origin"\n        class="block w-full border-0"\n      ></iframe>\n      <a\n        [href]="spotifyCollaborativePlaylistUrl"\n        target="_blank"\n        rel="noopener noreferrer"\n        class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1DB954] bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-[#1DB954] transition-colors duration-200 hover:bg-[#1DB954] hover:text-white"\n      >\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">\n          <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>\n        </svg>\n        ABRIR PLAYLIST COLABORATIVA\n      </a>\n    </div>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMusicComponent, { className: "UserMusicComponent", filePath: "app/components/user-music/user-music.component.ts", lineNumber: 12 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v21.2.21
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/@angular/forms/fesm2022/forms.mjs
/**
 * @license Angular v21.2.21
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    this.control?.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
var VERSION = /* @__PURE__ */ new Version("21.2.21");
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(-1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status === PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (!opts.onlySelf) {
      this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent?._updatePristine({}, sourceControl);
      }
      this._parent?._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (!opts.onlySelf) {
      this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control?.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (!opts.onlySelf) {
      this._parent?._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (!opts.onlySelf) {
      this._parent?._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl(dir.name);
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      container?.removeControl?.(dir.name);
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormGroup(this);
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    const ctrl = this.form?.get(dir.path);
    if (ctrl) {
      const isControlUpdated = cleanUpFormContainer(ctrl, dir);
      if (isControlUpdated) {
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    this._oldForm?._registerOnCollectionChange(() => {
    });
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    this.formDirective?.removeControl(this);
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    this._select?._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    this._select?._optionMap.delete(this.id);
    this._select?._writeValueAfterRender();
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, id) => {
        opt._setSelected(ids.indexOf(id) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      this._onChange?.();
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input) {
    return input != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input) => toFloat(input);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input) => toFloat(input);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input) => requiredValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input) => emailValidator;
  enabled(input) {
    return input;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input) => toInteger(input);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input) => input;
  createValidator = (input) => patternValidator(input);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/services/users.service.ts
var UsersService = class _UsersService {
  http = inject(HttpClient);
  apiUrl = `${environment.apiUrl}/users`;
  createUser(payload) {
    return this.http.post(this.apiUrl, payload);
  }
  getUsers() {
    return this.http.get(this.apiUrl);
  }
  suggestSong(payload) {
    return this.http.post(`${environment.apiUrl}/songs`, payload);
  }
  static \u0275fac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/user-form/user-form.component.ts
function UserFormComponent_fieldset_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fieldset", 6)(1, "legend", 7);
    \u0275\u0275text(2, "Especifica tu restriccion");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 33);
    \u0275\u0275elementEnd();
  }
}
function UserFormComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function UserFormComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function UserFormComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "h3", 38);
    \u0275\u0275text(3, "Registro completado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40)(7, "button", 41);
    \u0275\u0275listener("click", function UserFormComponent_div_77_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessPopup());
    });
    \u0275\u0275text(8, "Aceptar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
var UserFormComponent = class _UserFormComponent {
  title = signal("Confirma tu asistencia", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("\xA1Nos encantar\xEDa contar con tu presencia! Por favor, confirma tu asistencia para ayudarnos a planificar mejor el evento.", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  fb = inject(FormBuilder);
  usersService = inject(UsersService);
  destroyRef = inject(DestroyRef);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  isSuccessModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isSuccessModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal(null, ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  isOtroSelected = signal(false, ...ngDevMode ? [{ debugName: "isOtroSelected" }] : (
    /* istanbul ignore next */
    []
  ));
  userForm = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    lastName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.email]],
    numberPhone: ["", [Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    restriccion: ["", Validators.required],
    restriccionOtro: [""],
    confirmation: ["", Validators.required],
    message: ["", [Validators.maxLength(200)]]
  });
  constructor() {
    this.userForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.successMessage()) {
        this.successMessage.set(null);
        this.isSuccessModalOpen.set(false);
      }
    });
    this.userForm.controls.confirmation.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => this.toggleAttendanceDependentFields(value === "false"));
    this.userForm.controls.restriccion.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => this.isOtroSelected.set(value === "Otro" && !this.userForm.controls.restriccion.disabled));
    this.toggleAttendanceDependentFields(this.userForm.controls.confirmation.value === "false");
  }
  closeSuccessPopup() {
    this.isSuccessModalOpen.set(false);
    this.successMessage.set(null);
  }
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.successMessage.set(null);
    this.errorMessage.set(null);
    const _a = this.userForm.getRawValue(), { confirmation, restriccionOtro } = _a, rest = __objRest(_a, ["confirmation", "restriccionOtro"]);
    const isAttending = confirmation === "true";
    const restriccion = isAttending ? rest.restriccion === "Otro" ? restriccionOtro.trim() || "Otro" : rest.restriccion : "";
    const payload = __spreadProps(__spreadValues({}, rest), {
      email: isAttending ? rest.email : "",
      numberPhone: isAttending ? rest.numberPhone : "",
      message: isAttending ? rest.message : "",
      restriccion,
      confirmation: isAttending
    });
    this.usersService.createUser(payload).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
      next: () => {
        this.userForm.reset({
          name: "",
          lastName: "",
          email: "",
          numberPhone: "",
          restriccion: "",
          restriccionOtro: "",
          confirmation: "",
          message: ""
        }, { emitEvent: false });
        this.toggleAttendanceDependentFields(false);
        this.isOtroSelected.set(false);
        this.successMessage.set("Registro enviado correctamente.");
        this.isSuccessModalOpen.set(true);
      },
      error: (error) => {
        if (error.status === 0) {
          this.errorMessage.set("Error intenta m\xE1s tarde");
          return;
        }
        const apiMessage = typeof error.error === "object" && error.error !== null && "message" in error.error ? String(error.error.message) : null;
        this.errorMessage.set(apiMessage ?? "No se pudo enviar el formulario. Intentalo nuevamente.");
      }
    });
  }
  toggleAttendanceDependentFields(disableFields) {
    const controls = [
      this.userForm.controls.email,
      this.userForm.controls.numberPhone,
      this.userForm.controls.restriccion,
      this.userForm.controls.restriccionOtro,
      this.userForm.controls.message
    ];
    controls.forEach((control) => {
      if (disableFields) {
        control.disable({ emitEvent: false });
      } else {
        control.enable({ emitEvent: false });
      }
    });
    this.isOtroSelected.set(!disableFields && this.userForm.controls.restriccion.value === "Otro");
  }
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-user-form"]], decls: 78, vars: 66, consts: [["id", "confirmacion", 1, "mx-auto", "max-w-6xl", "bg-transparent", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "mx-auto", "max-w-2xl", "p-5", "text-center", "sm:p-8"], [1, "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], [1, "mt-2", "text-5xl", "font-light", "text-[#957845]", "sm:text-6xl", "tracking-wider"], [1, "mb-4", "text-[#957845]"], ["novalidate", "", 1, "text-center", 3, "ngSubmit", "formGroup"], [1, "mb-0"], [1, "mb-0", "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Ej. Ana", 1, "w-full", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-[#6f5735]", "placeholder:text-[#957845]/60", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], [1, "mt-0", "min-h-0", "text-base", "font-medium", "text-[#957845]"], ["id", "lastName", "type", "text", "formControlName", "lastName", "placeholder", "Ej. Perez", 1, "w-full", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-[#6f5735]", "placeholder:text-[#957845]/60", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], [1, "mt-0", "min-h-2", "text-base", "font-medium", "text-[#957845]"], ["id", "confirmation", "formControlName", "confirmation", 1, "w-full", "appearance-none", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-base", "text-[#6f5735]", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], ["value", "", "disabled", "", 1, "text-base"], ["value", "true", 1, "text-base"], ["value", "false", 1, "text-base"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "correo@ejemplo.com (opcional)", 1, "w-full", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-[#6f5735]", "placeholder:text-[#957845]/60", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], ["id", "numberPhone", "type", "tel", "formControlName", "numberPhone", "placeholder", "999 999 999 (opcional)", 1, "w-full", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-[#6f5735]", "placeholder:text-[#957845]/60", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], ["id", "restriccion", "formControlName", "restriccion", 1, "w-full", "appearance-none", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-base", "text-[#6f5735]", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], ["value", "", 1, "text-base"], ["value", "No", 1, "text-base"], ["value", "Celiaco", 1, "text-base"], ["value", "Vegano", 1, "text-base"], ["value", "Vegetariano", 1, "text-base"], ["value", "Otro", 1, "text-base"], ["class", "mb-0", 4, "ngIf"], ["id", "message", "formControlName", "message", "placeholder", "Escribe tu mensaje... (opcional)", "rows", "4", "maxlength", "200", 1, "w-full", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "leading-relaxed", "text-[#6f5735]", "placeholder:text-[#957845]/60", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], [1, "mt-1", "text-center", "text-base", "text-[#957845]"], [1, "mt-8", "flex", "justify-center"], ["type", "submit", 1, "rounded-full", "bg-[#957845]", "px-8", "py-3", "text-center", "text-base", "font-medium", "uppercase", "tracking-wider", "text-white", "transition-all", "duration-300", "hover:bg-[#7d5f35]", "hover:shadow-lg", "shadow-md", "disabled:cursor-not-allowed", "disabled:opacity-60", 3, "disabled"], ["class", "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white align-[-2px]", 4, "ngIf"], ["class", "mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700", 4, "ngIf"], ["class", "fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm", 4, "ngIf"], ["id", "restriccionOtro", "type", "text", "formControlName", "restriccionOtro", "placeholder", "Ej. Sin gluten, sin lactosa...", 1, "w-full", "rounded-xl", "border", "border-[#957845]/35", "bg-white/40", "px-4", "py-3", "text-[#6f5735]", "placeholder:text-[#957845]/60", "transition", "focus:outline-none", "focus:ring-2", "focus:ring-[#957845]/20"], [1, "mr-2", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white", "align-[-2px]"], [1, "mt-4", "rounded-xl", "border", "border-red-300", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-700"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/35", "p-4", "backdrop-blur-sm"], [1, "w-full", "max-w-md", "rounded-2xl", "bg-white", "p-6", "text-left", "shadow-2xl"], [1, "text-xl", "font-bold", "text-[#6f5735]"], [1, "py-3", "text-[#7c6541]"], [1, "mt-3", "flex", "justify-end"], ["type", "button", 1, "rounded-full", "bg-emerald-600", "px-5", "py-2", "text-sm", "font-semibold", "text-white", "transition-colors", "hover:bg-emerald-700", 3, "click"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "asistencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 5);
      \u0275\u0275listener("ngSubmit", function UserFormComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "fieldset", 6)(10, "legend", 7);
      \u0275\u0275text(11, "Nombre");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 8);
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275text(14, " Ingresa un nombre valido. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "fieldset", 6)(16, "legend", 7);
      \u0275\u0275text(17, "Apellido");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 10);
      \u0275\u0275elementStart(19, "p", 11);
      \u0275\u0275text(20, " Ingresa un apellido valido. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "fieldset", 6)(22, "legend", 7);
      \u0275\u0275text(23, "\xBFConfirmas tu asistencia?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "select", 12)(25, "option", 13);
      \u0275\u0275text(26, "Selecciona una opci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 14);
      \u0275\u0275text(28, "S\xED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 15);
      \u0275\u0275text(30, "No");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "p", 11);
      \u0275\u0275text(32, " Selecciona una opcion. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "fieldset", 6)(34, "legend", 7);
      \u0275\u0275text(35, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 16);
      \u0275\u0275elementStart(37, "p", 11);
      \u0275\u0275text(38, " Ingresa un correo valido. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "fieldset", 6)(40, "legend", 7);
      \u0275\u0275text(41, "Telefono");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 17);
      \u0275\u0275elementStart(43, "p", 11);
      \u0275\u0275text(44, " Ingresa un numero de telefono valido. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "fieldset", 6)(46, "legend", 7);
      \u0275\u0275text(47, "\xBFRestriccion alimentaria?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "select", 18)(49, "option", 19);
      \u0275\u0275text(50, "Selecciona una opci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 20);
      \u0275\u0275text(52, "No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 21);
      \u0275\u0275text(54, "Celiaco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "option", 22);
      \u0275\u0275text(56, "Vegano");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 23);
      \u0275\u0275text(58, "Vegetariano");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 24);
      \u0275\u0275text(60, "Otro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "p", 11);
      \u0275\u0275text(62, " Selecciona una opcion. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(63, UserFormComponent_fieldset_63_Template, 4, 0, "fieldset", 25);
      \u0275\u0275elementStart(64, "fieldset", 6)(65, "legend", 7);
      \u0275\u0275text(66, "Mensaje");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "textarea", 26);
      \u0275\u0275elementStart(68, "p", 27);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 11);
      \u0275\u0275text(71, " Ingresa un mensaje valido. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 28)(73, "button", 29);
      \u0275\u0275template(74, UserFormComponent_span_74_Template, 1, 0, "span", 30);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(76, UserFormComponent_div_76_Template, 3, 1, "div", 31)(77, UserFormComponent_div_77_Template, 9, 1, "div", 32);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.name.touched && ctx.userForm.controls.name.invalid)("ring-red-200", ctx.userForm.controls.name.touched && ctx.userForm.controls.name.invalid);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.name.touched && ctx.userForm.controls.name.invalid)("invisible", !(ctx.userForm.controls.name.touched && ctx.userForm.controls.name.invalid));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.lastName.touched && ctx.userForm.controls.lastName.invalid)("ring-red-200", ctx.userForm.controls.lastName.touched && ctx.userForm.controls.lastName.invalid);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.lastName.touched && ctx.userForm.controls.lastName.invalid)("invisible", !(ctx.userForm.controls.lastName.touched && ctx.userForm.controls.lastName.invalid));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.confirmation.touched && ctx.userForm.controls.confirmation.invalid)("ring-red-200", ctx.userForm.controls.confirmation.touched && ctx.userForm.controls.confirmation.invalid);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.confirmation.touched && ctx.userForm.controls.confirmation.invalid)("invisible", !(ctx.userForm.controls.confirmation.touched && ctx.userForm.controls.confirmation.invalid));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.email.touched && ctx.userForm.controls.email.invalid)("ring-red-200", ctx.userForm.controls.email.touched && ctx.userForm.controls.email.invalid);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.email.touched && ctx.userForm.controls.email.invalid)("invisible", !(ctx.userForm.controls.email.touched && ctx.userForm.controls.email.invalid));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.numberPhone.touched && ctx.userForm.controls.numberPhone.invalid)("ring-red-200", ctx.userForm.controls.numberPhone.touched && ctx.userForm.controls.numberPhone.invalid);
      \u0275\u0275advance();
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.numberPhone.touched && ctx.userForm.controls.numberPhone.invalid)("invisible", !(ctx.userForm.controls.numberPhone.touched && ctx.userForm.controls.numberPhone.invalid));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.restriccion.touched && ctx.userForm.controls.restriccion.invalid)("ring-red-200", ctx.userForm.controls.restriccion.touched && ctx.userForm.controls.restriccion.invalid);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.restriccion.touched && ctx.userForm.controls.restriccion.invalid)("invisible", !(ctx.userForm.controls.restriccion.touched && ctx.userForm.controls.restriccion.invalid));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOtroSelected());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-500", ctx.userForm.controls.message.touched && ctx.userForm.controls.message.invalid)("ring-red-200", ctx.userForm.controls.message.touched && ctx.userForm.controls.message.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.userForm.controls.message.value.length, "/200 ");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-red-600", ctx.userForm.controls.message.touched && ctx.userForm.controls.message.invalid)("invisible", !(ctx.userForm.controls.message.touched && ctx.userForm.controls.message.invalid));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.userForm.invalid || ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Enviando..." : "Enviar Confirmaci\xF3n", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSuccessModalOpen());
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "app-user-form", imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section id="confirmacion" class="mx-auto max-w-6xl bg-transparent px-4 py-10 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-2xl p-5 text-center sm:p-8">
      <p class="text-base font-semibold uppercase tracking-widest text-[#957845]">asistencia</p>
      <h2 class="mt-2 text-5xl font-light text-[#957845] sm:text-6xl tracking-wider">{{ title() }}</h2>
      <p class="mb-4 text-[#957845]">{{ subtitle() }}</p>
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate class="text-center">
        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">Nombre</legend>
          <input
            id="name"
            type="text"
            formControlName="name"
            placeholder="Ej. Ana"
            class="w-full rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-[#6f5735] placeholder:text-[#957845]/60 transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.name.touched && userForm.controls.name.invalid"
            [class.ring-red-200]="userForm.controls.name.touched && userForm.controls.name.invalid"
          />
          <p
            class="mt-0 min-h-0 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.name.touched && userForm.controls.name.invalid"
            [class.invisible]="!(userForm.controls.name.touched && userForm.controls.name.invalid)"
          >
            Ingresa un nombre valido.
          </p>
        </fieldset>
        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">Apellido</legend>
          <input
            id="lastName"
            type="text"
            formControlName="lastName"
            placeholder="Ej. Perez"
            class="w-full rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-[#6f5735] placeholder:text-[#957845]/60 transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.lastName.touched && userForm.controls.lastName.invalid"
            [class.ring-red-200]="userForm.controls.lastName.touched && userForm.controls.lastName.invalid"
          />
          <p
            class="mt-0 min-h-2 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.lastName.touched && userForm.controls.lastName.invalid"
            [class.invisible]="!(userForm.controls.lastName.touched && userForm.controls.lastName.invalid)"
          >
            Ingresa un apellido valido.
          </p>
        </fieldset>

        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">\xBFConfirmas tu asistencia?</legend>
          <select
            id="confirmation"
            formControlName="confirmation"
            class="w-full appearance-none rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-base text-[#6f5735] transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.confirmation.touched && userForm.controls.confirmation.invalid"
            [class.ring-red-200]="userForm.controls.confirmation.touched && userForm.controls.confirmation.invalid"
          >
            <option value="" disabled class="text-base">Selecciona una opci\xF3n</option>
            <option value="true" class="text-base">S\xED</option>
            <option value="false" class="text-base">No</option>
          </select>
          <p
            class="mt-0 min-h-2 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.confirmation.touched && userForm.controls.confirmation.invalid"
            [class.invisible]="!(userForm.controls.confirmation.touched && userForm.controls.confirmation.invalid)"
          >
            Selecciona una opcion.
          </p>
        </fieldset>

        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">Correo</legend>
          <input
            id="email"
            type="email"
            formControlName="email"
            placeholder="correo@ejemplo.com (opcional)"
            class="w-full rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-[#6f5735] placeholder:text-[#957845]/60 transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.email.touched && userForm.controls.email.invalid"
            [class.ring-red-200]="userForm.controls.email.touched && userForm.controls.email.invalid"
          />
          <p
            class="mt-0 min-h-2 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.email.touched && userForm.controls.email.invalid"
            [class.invisible]="!(userForm.controls.email.touched && userForm.controls.email.invalid)"
          >
            Ingresa un correo valido.
          </p>
        </fieldset>

        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">Telefono</legend>
          <input
            id="numberPhone"
            type="tel"
            formControlName="numberPhone"
            placeholder="999 999 999 (opcional)"
            class="w-full rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-[#6f5735] placeholder:text-[#957845]/60 transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.numberPhone.touched && userForm.controls.numberPhone.invalid"
            [class.ring-red-200]="userForm.controls.numberPhone.touched && userForm.controls.numberPhone.invalid"
          />
          <p
            class="mt-0 min-h-2 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.numberPhone.touched && userForm.controls.numberPhone.invalid"
            [class.invisible]="!(userForm.controls.numberPhone.touched && userForm.controls.numberPhone.invalid)"
          >
            Ingresa un numero de telefono valido.
          </p>
        </fieldset>

        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">\xBFRestriccion alimentaria?</legend>
          <select
            id="restriccion"
            formControlName="restriccion"
            class="w-full appearance-none rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-base text-[#6f5735] transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.restriccion.touched && userForm.controls.restriccion.invalid"
            [class.ring-red-200]="userForm.controls.restriccion.touched && userForm.controls.restriccion.invalid"
          >
            <option value="" class="text-base">Selecciona una opci\xF3n</option>
            <option value="No" class="text-base">No</option>
            <option value="Celiaco" class="text-base">Celiaco</option>
            <option value="Vegano" class="text-base">Vegano</option>
            <option value="Vegetariano" class="text-base">Vegetariano</option>
            <option value="Otro" class="text-base">Otro</option>
          </select>
          <p
            class="mt-0 min-h-2 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.restriccion.touched && userForm.controls.restriccion.invalid"
            [class.invisible]="!(userForm.controls.restriccion.touched && userForm.controls.restriccion.invalid)"
          >
            Selecciona una opcion.
          </p>
        </fieldset>

        <fieldset *ngIf="isOtroSelected()" class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">Especifica tu restriccion</legend>
          <input
            id="restriccionOtro"
            type="text"
            formControlName="restriccionOtro"
            placeholder="Ej. Sin gluten, sin lactosa..."
            class="w-full rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 text-[#6f5735] placeholder:text-[#957845]/60 transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
          />
        </fieldset>

        <fieldset class="mb-0">
          <legend class="mb-0 text-base font-semibold uppercase tracking-widest text-[#957845]">Mensaje</legend>
          <textarea
            id="message"
            formControlName="message"
            placeholder="Escribe tu mensaje... (opcional)"
            rows="4"
            maxlength="200"
            class="w-full rounded-xl border border-[#957845]/35 bg-white/40 px-4 py-3 leading-relaxed text-[#6f5735] placeholder:text-[#957845]/60 transition focus:outline-none focus:ring-2 focus:ring-[#957845]/20"
            [class.border-red-500]="userForm.controls.message.touched && userForm.controls.message.invalid"
            [class.ring-red-200]="userForm.controls.message.touched && userForm.controls.message.invalid"
          ></textarea>
          <p class="mt-1 text-center text-base text-[#957845]">
            {{ userForm.controls.message.value.length }}/200
          </p>
          <p
            class="mt-0 min-h-2 text-base font-medium text-[#957845]"
            [class.text-red-600]="userForm.controls.message.touched && userForm.controls.message.invalid"
            [class.invisible]="!(userForm.controls.message.touched && userForm.controls.message.invalid)"
          >
            Ingresa un mensaje valido.
          </p>
        </fieldset>

        <div class="mt-8 flex justify-center">
          <button
            type="submit"
            class="rounded-full bg-[#957845] px-8 py-3 text-center text-base font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#7d5f35] hover:shadow-lg shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            [disabled]="userForm.invalid || isSubmitting()"
          >
            <span *ngIf="isSubmitting()" class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white align-[-2px]"></span>
            {{ isSubmitting() ? 'Enviando...' : 'Enviar Confirmaci\xF3n' }}
          </button>
        </div>

      </form>

      <div *ngIf="errorMessage()" class="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
        <span>{{ errorMessage() }}</span>
      </div>

      <div *ngIf="isSuccessModalOpen()" class="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm">
        <div class="w-full max-w-md rounded-2xl bg-white p-6 text-left shadow-2xl">
          <h3 class="text-xl font-bold text-[#6f5735]">Registro completado</h3>
          <p class="py-3 text-[#7c6541]">{{ successMessage() }}</p>
          <div class="mt-3 flex justify-end">
            <button type="button" class="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700" (click)="closeSuccessPopup()">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "app/components/user-form/user-form.component.ts", lineNumber: 15 });
})();

// src/app/components/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  isHeaderHidden = signal(false, ...ngDevMode ? [{ debugName: "isHeaderHidden" }] : (
    /* istanbul ignore next */
    []
  ));
  lastScrollY = 0;
  onWindowScroll() {
    const currentScrollY = window.scrollY || 0;
    if (currentScrollY < 24) {
      this.isHeaderHidden.set(false);
      this.lastScrollY = currentScrollY;
      return;
    }
    const scrollingDown = currentScrollY > this.lastScrollY;
    this.isHeaderHidden.set(scrollingDown);
    this.lastScrollY = currentScrollY;
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 9, vars: 2, consts: [[1, "sticky", "top-0", "z-20", "border-b", "border-[#957845]/20", "bg-[#f8f6f3]/30", "backdrop-blur", "transition-transform", "duration-300"], [1, "mx-auto", "max-w-6xl", "px-4", "py-3", "sm:px-6", "lg:px-8"], [1, "mt-3", "flex", "justify-center", "gap-2", "overflow-x-auto", "pb-1", "text-base", "font-medium", "text-[#957845]", "sm:text-base", "md:mt-0", "md:gap-6", "md:overflow-visible", "md:pb-0"], [1, "shrink-0"], ["href", "#regalos", 1, "block", "rounded-full", "border", "border-[#957845]/50", "bg-white/25", "px-3", "py-1.5", "transition-colors", "duration-200", "hover:text-[#957845]", "md:border-0", "md:bg-transparent", "md:px-0", "md:py-0"], ["href", "#confirmacion", 1, "block", "rounded-full", "border", "border-[#957845]/50", "bg-white/25", "px-3", "py-1.5", "transition-colors", "duration-200", "hover:text-[#957845]", "md:border-0", "md:bg-transparent", "md:px-0", "md:py-0"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "nav", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
      \u0275\u0275text(5, "Regalos");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "li", 3)(7, "a", 5);
      \u0275\u0275text(8, "Confirmaci\xF3n");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("-translate-y-full", ctx.isHeaderHidden());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [], template: '<header\n  class="sticky top-0 z-20 border-b border-[#957845]/20 bg-[#f8f6f3]/30 backdrop-blur transition-transform duration-300"\n  [class.-translate-y-full]="isHeaderHidden()"\n>\n  <nav class="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">\n    <!-- <div class="flex items-center justify-center gap-3">\n      <a href="#inicio" class="shrink-0 text-base font-semibold tracking-wide text-[#957845] sm:text-xl">Natural Nude</a>\n    </div> -->\n    <ul class="mt-3 flex justify-center gap-2 overflow-x-auto pb-1 text-base font-medium text-[#957845] sm:text-base md:mt-0 md:gap-6 md:overflow-visible md:pb-0">\n      <li class="shrink-0"><a class="block rounded-full border border-[#957845]/50 bg-white/25 px-3 py-1.5 transition-colors duration-200 hover:text-[#957845] md:border-0 md:bg-transparent md:px-0 md:py-0" href="#regalos">Regalos</a></li>\n      <li class="shrink-0"><a class="block rounded-full border border-[#957845]/50 bg-white/25 px-3 py-1.5 transition-colors duration-200 hover:text-[#957845] md:border-0 md:bg-transparent md:px-0 md:py-0" href="#confirmacion">Confirmaci\xF3n</a></li>\n    </ul>\n  </nav>\n</header>\n' }]
  }], null, { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "app/components/header/header.component.ts", lineNumber: 8 });
})();

// src/app/components/gift/gift.component.ts
var GiftComponent = class _GiftComponent {
  title = signal("Regalo", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("\xBFQuieres hacernos un regalo?", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle2 = signal("Tu presencia es el mejor regalo que podr\xEDamos pedir. Sin embargo, si deseas contribuir a nuestro fondo para la luna de miel, aqu\xED tienes nuestras opciones de transferencia.", ...ngDevMode ? [{ debugName: "subtitle2" }] : (
    /* istanbul ignore next */
    []
  ));
  copiedMessage = signal("", ...ngDevMode ? [{ debugName: "copiedMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  bankAccount = signal({
    bank: "Banco Estado",
    accountHolder: "Camila Gonzalez",
    accountNumber: "12345678-9",
    email: "camilagonzalez@email.com"
  }, ...ngDevMode ? [{ debugName: "bankAccount" }] : (
    /* istanbul ignore next */
    []
  ));
  async copyBankDetails() {
    const details = this.bankAccount();
    const text = [
      `Banco: ${details.bank}`,
      `Titular: ${details.accountHolder}`,
      `Cuenta: ${details.accountNumber}`,
      `Email: ${details.email}`
    ].join("\n");
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      this.copiedMessage.set("Datos bancarios copiados.");
    } catch {
      this.copiedMessage.set("No se pudo copiar. Intenta nuevamente.");
    }
  }
  static \u0275fac = function GiftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GiftComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GiftComponent, selectors: [["app-gift"]], decls: 31, vars: 10, consts: [["id", "regalos", 1, "mx-auto", "max-w-6xl", "bg-transparent", "px-4", "py-12", "sm:px-6", "lg:px-8"], [1, "flex", "justify-center", "text-center"], [1, "w-full", "max-w-2xl", "p-5", "text-center", "sm:p-8"], ["src", "assets/branding/regalo.png", "alt", "Ilustracion de regalos", "loading", "lazy", "decoding", "async", 1, "mx-auto", "h-44", "w-full", "max-w-xs", "object-contain", "sm:h-52"], [1, "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], [1, "mt-2", "text-5xl", "font-light", "text-[#957845]", "sm:text-6xl", "tracking-wider"], [1, "mt-4", "text-base", "leading-relaxed", "text-[#957845]"], [1, "mt-4", "space-y-3", "text-base", "text-[#957845]"], ["type", "button", 1, "mt-6", "inline-block", "rounded-full", "bg-[#957845]", "px-8", "py-3", "text-base", "font-medium", "uppercase", "tracking-wider", "text-white", "transition-all", "duration-300", "hover:bg-[#7d5f35]", "hover:shadow-lg", "shadow-md", 3, "click"], [1, "mt-3", "text-base", "text-[#957845]"]], template: function GiftComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "img", 3);
      \u0275\u0275domElementStart(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "h2", 5);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 7)(11, "p")(12, "strong");
      \u0275\u0275text(13, "Banco:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p")(16, "strong");
      \u0275\u0275text(17, "Titular:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "p")(20, "strong");
      \u0275\u0275text(21, "Cuenta:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "p")(24, "strong");
      \u0275\u0275text(25, "Email:");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(26);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "button", 8);
      \u0275\u0275domListener("click", function GiftComponent_Template_button_click_27_listener() {
        return ctx.copyBankDetails();
      });
      \u0275\u0275text(28, " Copiar Datos Bancarios ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "p", 9);
      \u0275\u0275text(30);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle2());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.bankAccount().bank);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.bankAccount().accountHolder);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.bankAccount().accountNumber);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.bankAccount().email);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("hidden", !ctx.copiedMessage());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.copiedMessage());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GiftComponent, [{
    type: Component,
    args: [{ selector: "app-gift", imports: [], template: '<section id="regalos" class="mx-auto max-w-6xl bg-transparent px-4 py-12 sm:px-6 lg:px-8">\n  <div class="flex justify-center text-center">\n    <div class="w-full max-w-2xl p-5 text-center sm:p-8">\n      <img\n        src="assets/branding/regalo.png"\n        alt="Ilustracion de regalos"\n        class="mx-auto h-44 w-full max-w-xs object-contain sm:h-52"\n        loading="lazy"\n        decoding="async"\n      />\n      <p class="text-base font-semibold uppercase tracking-widest text-[#957845]">{{ title() }}</p>\n      <h2 class="mt-2 text-5xl font-light text-[#957845] sm:text-6xl tracking-wider">{{ subtitle() }}</h2>\n      <p class="mt-4 text-base leading-relaxed text-[#957845]">{{ subtitle2() }}</p>\n      <div class="mt-4 space-y-3 text-base text-[#957845]">\n        <p><strong>Banco:</strong> {{ bankAccount().bank }}</p>\n        <p><strong>Titular:</strong> {{ bankAccount().accountHolder }}</p>\n        <p><strong>Cuenta:</strong> {{ bankAccount().accountNumber }}</p>\n        <p><strong>Email:</strong> {{ bankAccount().email }}</p>\n      </div>\n      <button\n        type="button"\n        (click)="copyBankDetails()"\n        class="mt-6 inline-block rounded-full bg-[#957845] px-8 py-3 text-base font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#7d5f35] hover:shadow-lg shadow-md"\n      >\n        Copiar Datos Bancarios\n      </button>\n      <p class="mt-3 text-base text-[#957845]" [class.hidden]="!copiedMessage()">{{ copiedMessage() }}</p>\n    </div>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GiftComponent, { className: "GiftComponent", filePath: "app/components/gift/gift.component.ts", lineNumber: 8 });
})();

// src/app/components/countdown/countdown.component.ts
var WEDDING_DATE = new Date(2027, 3, 20, 0, 0, 0).getTime();
var CountdownComponent = class _CountdownComponent {
  title = signal("\xA1La cuenta regresiva ha comenzado!", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("Estamos emocionados de compartir este momento contigo. \xA1Faltan pocos d\xEDas para la gran celebraci\xF3n!", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  days = signal(0, ...ngDevMode ? [{ debugName: "days" }] : (
    /* istanbul ignore next */
    []
  ));
  hours = signal(0, ...ngDevMode ? [{ debugName: "hours" }] : (
    /* istanbul ignore next */
    []
  ));
  minutes = signal(0, ...ngDevMode ? [{ debugName: "minutes" }] : (
    /* istanbul ignore next */
    []
  ));
  seconds = signal(0, ...ngDevMode ? [{ debugName: "seconds" }] : (
    /* istanbul ignore next */
    []
  ));
  intervalId = null;
  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1e3);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  updateCountdown() {
    const now = (/* @__PURE__ */ new Date()).getTime();
    const difference = WEDDING_DATE - now;
    if (difference <= 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      return;
    }
    const timeData = {
      days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
      minutes: Math.floor(difference / 1e3 / 60 % 60),
      seconds: Math.floor(difference / 1e3 % 60)
    };
    this.days.set(timeData.days);
    this.hours.set(timeData.hours);
    this.minutes.set(timeData.minutes);
    this.seconds.set(timeData.seconds);
  }
  static \u0275fac = function CountdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountdownComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountdownComponent, selectors: [["app-countdown"]], decls: 27, vars: 6, consts: [["id", "cuenta", 1, "mx-auto", "max-w-6xl", "bg-transparent", "px-4", "py-10", "text-center", "sm:px-6", "lg:px-8"], [1, "p-5", "text-center", "sm:p-8"], [1, "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], [1, "mt-2", "text-4xl", "font-light", "text-[#957845]", "sm:text-5xl", "tracking-wider"], [1, "mt-8", "grid", "grid-cols-2", "gap-4", "sm:grid-cols-4"], [1, "rounded-2xl", "bg-white/25", "p-3", "sm:p-4"], [1, "text-4xl", "font-semibold", "text-[#957845]", "sm:text-4xl"], [1, "text-base", "text-[#957845]"]], template: function CountdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 4)(7, "div", 5)(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p", 7);
      \u0275\u0275text(11, "Dias");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 5)(13, "p", 6);
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p", 7);
      \u0275\u0275text(16, "Horas");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "div", 5)(18, "p", 6);
      \u0275\u0275text(19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "p", 7);
      \u0275\u0275text(21, "Minutos");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 5)(23, "p", 6);
      \u0275\u0275text(24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p", 7);
      \u0275\u0275text(26, "Segundos");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.days());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.hours());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.minutes());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.seconds());
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountdownComponent, [{
    type: Component,
    args: [{ selector: "app-countdown", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: ' <section id="cuenta" class="mx-auto max-w-6xl bg-transparent px-4 py-10 text-center sm:px-6 lg:px-8">\n   <div class="p-5 text-center sm:p-8">\n      <p class="text-base font-semibold uppercase tracking-widest text-[#957845]">{{ title() }}</p>\n      <h2 class="mt-2 text-4xl font-light text-[#957845] sm:text-5xl tracking-wider">{{ subtitle() }}</h2>\n      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">\n        <div class="rounded-2xl bg-white/25 p-3 sm:p-4">\n          <p class="text-4xl font-semibold text-[#957845] sm:text-4xl">{{ days() }}</p>\n          <p class="text-base text-[#957845]">Dias</p>\n        </div>\n        <div class="rounded-2xl bg-white/25 p-3 sm:p-4">\n          <p class="text-4xl font-semibold text-[#957845] sm:text-4xl">{{ hours() }}</p>\n          <p class="text-base text-[#957845]">Horas</p>\n        </div>\n        <div class="rounded-2xl bg-white/25 p-3 sm:p-4">\n          <p class="text-4xl font-semibold text-[#957845] sm:text-4xl">{{ minutes() }}</p>\n          <p class="text-base text-[#957845]">Minutos</p>\n        </div>\n        <div class="rounded-2xl bg-white/25 p-3 sm:p-4">\n          <p class="text-4xl font-semibold text-[#957845] sm:text-4xl">{{ seconds() }}</p>\n          <p class="text-base text-[#957845]">Segundos</p>\n        </div>\n      </div>\n    </div>\n  </section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountdownComponent, { className: "CountdownComponent", filePath: "app/components/countdown/countdown.component.ts", lineNumber: 19 });
})();

// src/app/components/maps/maps.component.ts
var MapsComponent = class _MapsComponent {
  title = signal("Ceremonia", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  addressDetail = signal("Av. Las Condes 9700, Las Condes, Santiago de Chile", ...ngDevMode ? [{ debugName: "addressDetail" }] : (
    /* istanbul ignore next */
    []
  ));
  addressDescription = signal("Parroquia Santa Maria de Las Condes", ...ngDevMode ? [{ debugName: "addressDescription" }] : (
    /* istanbul ignore next */
    []
  ));
  addressLink = signal("https://maps.app.goo.gl/BZm533e8FkiRVdYp7", ...ngDevMode ? [{ debugName: "addressLink" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function MapsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapsComponent, selectors: [["app-maps"]], decls: 10, vars: 4, consts: [[1, "mx-auto", "flex", "flex-col", "items-center", "justify-center", "max-w-6xl", "gap-6", "bg-transparent", "px-4", "pb-10", "text-center", "sm:px-6", "lg:px-8"], ["id", "ceremonia", 1, "bg-transparent", "p-5", "text-center", "sm:p-8", "max-w-md"], [1, "mb-2", "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], [1, "text-5xl", "font-light", "text-[#957845]", "sm:text-6xl", "tracking-wider"], [1, "mt-4", "text-base", "leading-relaxed", "text-[#957845]"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-8", "inline-block", "rounded-full", "bg-[#957845]", "px-8", "py-3", "text-center", "text-base", "font-medium", "uppercase", "tracking-wider", "text-white", "transition-all", "duration-300", "hover:shadow-lg", "hover:bg-[#7d5f35]", "shadow-md", 3, "href"]], template: function MapsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "article", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "a", 5);
      \u0275\u0275text(9, " Abrir en Google Maps ");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.addressDescription());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.addressDescription());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.addressDetail());
      \u0275\u0275advance();
      \u0275\u0275domProperty("href", ctx.addressLink(), \u0275\u0275sanitizeUrl);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsComponent, [{
    type: Component,
    args: [{ selector: "app-maps", imports: [], template: ' <section class="mx-auto flex flex-col items-center justify-center max-w-6xl gap-6 bg-transparent px-4 pb-10 text-center sm:px-6 lg:px-8">\n   <article id="ceremonia" class="bg-transparent p-5 text-center sm:p-8 max-w-md">\n      <p class="mb-2 text-base font-semibold uppercase tracking-widest text-[#957845]">{{ addressDescription() }}</p>\n      <h2 class="text-5xl font-light text-[#957845] sm:text-6xl tracking-wider">{{ addressDescription() }}</h2>\n      <p class="mt-4 text-base leading-relaxed text-[#957845]">{{ addressDetail() }}</p>\n      <a\n        [href]="addressLink()"\n        target="_blank"\n        rel="noopener noreferrer"\n        class="mt-8 inline-block rounded-full bg-[#957845] px-8 py-3 text-center text-base font-medium uppercase tracking-wider text-white transition-all duration-300 hover:shadow-lg hover:bg-[#7d5f35] shadow-md"\n      >\n        Abrir en Google Maps\n      </a>\n    </article>\n  </section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapsComponent, { className: "MapsComponent", filePath: "app/components/maps/maps.component.ts", lineNumber: 8 });
})();

// src/app/components/start/start.component.ts
var StartComponent = class _StartComponent {
  title = signal("Invitacion de boda", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("Ma. Jos\xE9\ny Gonzalo", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle2 = signal("Estamos emocionados de compartir este momento tan especial con ustedes. \xA1Gracias por ser parte de nuestra historia!", ...ngDevMode ? [{ debugName: "subtitle2" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function StartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StartComponent, selectors: [["app-start"]], decls: 24, vars: 0, consts: [["id", "inicio", 1, "relative", "min-h-screen", "overflow-hidden", "bg-[url('/assets/branding/Designer3.webp')]", "bg-cover", "bg-center", "bg-no-repeat", "lg:bg-[url('/assets/branding/Designer4.webp')]"], [1, "mx-auto", "flex", "w-full", "max-w-6xl", "flex-col", "items-center", "justify-start", "gap-2", "px-4", "pt-10", "pb-16", "text-center", "sm:px-6", "lg:px-8", "lg:pt-14", "lg:pb-24"], ["src", "assets/branding/noscasamos.svg", "alt", "Iniciales de los novios", "loading", "lazy", "decoding", "async", 1, "mx-auto", "mt-16", "h-auto", "w-full", "max-w-xs", "object-contain", "sm:mt-20"], ["aria-label", "Nombres de los novios", 1, "font-script", "mx-auto", "mt-4", "text-center", "text-2xl", "font-normal", "leading-none", "tracking-[0.08em]", "text-[#957845]", "sm:mt-6", "sm:text-3xl", "md:text-4xl"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-center", "text-2xl", "font-medium", "uppercase", "tracking-[0.2em]", "text-[#957845]", "sm:mt-6", "sm:text-3xl", "md:text-4xl"], ["aria-label", "Nombres de los novios", 1, "font-script", "mx-auto", "mt-4", "text-center", "text-4xl", "leading-none", "tracking-[0.09em]", "text-[#957845]", "sm:mt-6", "sm:text-5xl", "md:text-6xl"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-center", "text-xl", "leading-relaxed", "text-[#957845]", "sm:mt-6", "sm:text-2xl"]], template: function StartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "img", 2);
      \u0275\u0275domElementStart(3, "h1", 3);
      \u0275\u0275text(4, " \xA1Nos Casamos!");
      \u0275\u0275domElement(5, "br");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "h2", 4);
      \u0275\u0275text(7, " MAR\xCDA JOS\xC9 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "h1", 5);
      \u0275\u0275text(9, " Gonz\xE1lez Rodr\xEDguez");
      \u0275\u0275domElement(10, "br");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "h1", 5);
      \u0275\u0275text(12, " y");
      \u0275\u0275domElement(13, "br");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "h2", 4);
      \u0275\u0275text(15, " GONZALO ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "h1", 5);
      \u0275\u0275text(17, " Pe\xF1a Gutierrez ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "h2", 6);
      \u0275\u0275text(19, "El amor es nuestra");
      \u0275\u0275domElement(20, "br");
      \u0275\u0275text(21, " promesa y ustedes son");
      \u0275\u0275domElement(22, "br");
      \u0275\u0275text(23, " el testimonio de nuestra felicidad.");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StartComponent, [{
    type: Component,
    args: [{ selector: "app-start", imports: [], template: `  <section id="inicio" class="relative min-h-screen overflow-hidden bg-[url('/assets/branding/Designer3.webp')] bg-cover bg-center bg-no-repeat lg:bg-[url('/assets/branding/Designer4.webp')]">
    <div class="mx-auto flex w-full max-w-6xl flex-col items-center justify-start gap-2 px-4 pt-10 pb-16 text-center sm:px-6 lg:px-8 lg:pt-14 lg:pb-24">
      <img
        src="assets/branding/noscasamos.svg"
        alt="Iniciales de los novios"
        loading="lazy"
        decoding="async"
        class="mx-auto mt-16 h-auto w-full max-w-xs object-contain sm:mt-20"
      />

      <h1
        class="font-script mx-auto mt-4 text-center text-2xl font-normal leading-none tracking-[0.08em] text-[#957845] sm:mt-6 sm:text-3xl md:text-4xl"
        aria-label="Nombres de los novios"
      >
        \xA1Nos Casamos!<br />
      </h1>
      

      <h2 class="mx-auto mt-4 max-w-2xl text-center text-2xl font-medium uppercase tracking-[0.2em] text-[#957845] sm:mt-6 sm:text-3xl md:text-4xl">
      MAR\xCDA JOS\xC9
      </h2>
      <h1
        class="font-script mx-auto mt-4 text-center text-4xl leading-none tracking-[0.09em] text-[#957845] sm:mt-6 sm:text-5xl md:text-6xl"
        aria-label="Nombres de los novios"
      >
        Gonz\xE1lez Rodr\xEDguez<br />
      </h1>
      <h1
        class="font-script mx-auto mt-4 text-center text-4xl leading-none tracking-[0.09em] text-[#957845] sm:mt-6 sm:text-5xl md:text-6xl"
        aria-label="Nombres de los novios"
      >
        y<br />
      </h1>

      <h2 class="mx-auto mt-4 max-w-2xl text-center text-2xl font-medium uppercase tracking-[0.2em] text-[#957845] sm:mt-6 sm:text-3xl md:text-4xl">
      GONZALO
      </h2>
      <h1
        class="font-script mx-auto mt-4 text-center text-4xl leading-none tracking-[0.09em] text-[#957845] sm:mt-6 sm:text-5xl md:text-6xl"
        aria-label="Nombres de los novios"
      >
        Pe\xF1a Gutierrez
      </h1>

      <h2 class="mx-auto mt-4 max-w-2xl text-center text-xl leading-relaxed text-[#957845] sm:mt-6 sm:text-2xl">El amor es nuestra<br />
      promesa y ustedes son<br />
      el testimonio de nuestra felicidad.</h2>
    </div>
  </section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StartComponent, { className: "StartComponent", filePath: "app/components/start/start.component.ts", lineNumber: 8 });
})();

// src/app/components/itinerary/itinerary.component.ts
var ItineraryComponent = class _ItineraryComponent {
  title = signal("Itinerario", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("Organizate con tiempo para no perderte ningun momento especial.", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function ItineraryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItineraryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItineraryComponent, selectors: [["app-itinerary"]], decls: 17, vars: 2, consts: [["id", "itinerario", 1, "mx-auto", "max-w-6xl", "bg-transparent", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "bg-transparent", "p-5", "text-center", "sm:p-8"], [1, "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], [1, "mt-2", "text-5xl", "font-light", "text-[#957845]", "sm:text-6xl", "tracking-wider"], [1, "mt-3", "text-[#957845]"], [1, "mt-8", "flex", "justify-center"], [1, "w-full", "max-w-5xl", "p-5", "text-center"], ["src", "assets/branding/programacion.png", "alt", "Imagen de ceremonia", "loading", "lazy", "decoding", "async", 1, "mx-auto", "block", "h-176", "w-full", "object-contain", "sm:h-208", "lg:h-248"], [1, "mt-4", "text-base", "font-semibold", "uppercase", "tracking-wider", "text-[#957845]"], [1, "mt-2", "text-xl", "font-semibold", "text-[#957845]"], [1, "mt-2", "text-base", "text-[#957845]"]], template: function ItineraryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "Agenda del dia");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "article", 6);
      \u0275\u0275domElement(10, "img", 7);
      \u0275\u0275domElementStart(11, "p", 8);
      \u0275\u0275text(12, "16:30");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "h3", 9);
      \u0275\u0275text(14, "Ceremonia");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p", 10);
      \u0275\u0275text(16, "Parroquia Santa Maria de Las Condes.");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItineraryComponent, [{
    type: Component,
    args: [{ selector: "app-itinerary", imports: [], template: '<section id="itinerario" class="mx-auto max-w-6xl bg-transparent px-4 py-10 sm:px-6 lg:px-8">\n  <div class="bg-transparent p-5 text-center sm:p-8">\n    <p class="text-base font-semibold uppercase tracking-widest text-[#957845]">Agenda del dia</p>\n    <h2 class="mt-2 text-5xl font-light text-[#957845] sm:text-6xl tracking-wider">{{ title() }}</h2>\n    <p class="mt-3 text-[#957845]">{{ subtitle() }}</p>\n    <div class="mt-8 flex justify-center">\n      <article class="w-full max-w-5xl p-5 text-center">\n        <img\n          src="assets/branding/programacion.png"\n          alt="Imagen de ceremonia"\n          class="mx-auto block h-176 w-full object-contain sm:h-208 lg:h-248"\n          loading="lazy"\n          decoding="async"\n        />\n        <p class="mt-4 text-base font-semibold uppercase tracking-wider text-[#957845]">16:30</p>\n        <h3 class="mt-2 text-xl font-semibold text-[#957845]">Ceremonia</h3>\n        <p class="mt-2 text-base text-[#957845]">Parroquia Santa Maria de Las Condes.</p>\n      </article>\n    </div>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItineraryComponent, { className: "ItineraryComponent", filePath: "app/components/itinerary/itinerary.component.ts", lineNumber: 8 });
})();

// src/app/components/dress-code/dress-code.component.ts
var DressCodeComponent = class _DressCodeComponent {
  title = signal("Dress Code", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  subtitle = signal("Queremos que te sientas comodo y elegante para celebrar juntos.", ...ngDevMode ? [{ debugName: "subtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function DressCodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DressCodeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DressCodeComponent, selectors: [["app-dress-code"]], decls: 16, vars: 2, consts: [["id", "dress-code", 1, "mx-auto", "max-w-6xl", "bg-transparent", "px-4", "py-10", "sm:px-6", "lg:px-8"], [1, "bg-transparent", "p-5", "text-center", "sm:p-8"], [1, "text-base", "font-semibold", "uppercase", "tracking-widest", "text-[#957845]"], [1, "mt-2", "text-5xl", "font-light", "text-[#957845]", "sm:text-6xl", "tracking-wider"], [1, "mt-3", "text-[#957845]"], [1, "mt-8", "flex", "justify-center"], [1, "w-full", "max-w-md", "overflow-hidden", "text-center", "transition-transform", "duration-300", "hover:-translate-y-1"], ["src", "assets/branding/dresscode20.webp", "alt", "Referencia de traje formal para ellos", "loading", "lazy", "decoding", "async", 1, "h-48", "w-full", "object-contain", "sm:h-56"], [1, "p-5"], [1, "text-xl", "font-semibold", "text-[#957845]"], [1, "mt-2", "text-base", "leading-relaxed", "text-[#957845]"]], template: function DressCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "Codigo de vestimenta");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 5)(9, "article", 6);
      \u0275\u0275domElement(10, "img", 7);
      \u0275\u0275domElementStart(11, "div", 8)(12, "h3", 9);
      \u0275\u0275text(13, "Ellos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p", 10);
      \u0275\u0275text(15, "Traje formal, camisa y zapatos de vestir.");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.subtitle());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DressCodeComponent, [{
    type: Component,
    args: [{ selector: "app-dress-code", standalone: true, imports: [], template: '<section id="dress-code" class="mx-auto max-w-6xl bg-transparent px-4 py-10 sm:px-6 lg:px-8">\n  <div class="bg-transparent p-5 text-center sm:p-8">\n    <p class="text-base font-semibold uppercase tracking-widest text-[#957845]">Codigo de vestimenta</p>\n    <h2 class="mt-2 text-5xl font-light text-[#957845] sm:text-6xl tracking-wider">{{ title() }}</h2>\n    <p class="mt-3 text-[#957845]">{{ subtitle() }}</p>\n\n    <div class="mt-8 flex justify-center">\n      <article class="w-full max-w-md overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1">\n        <img\n          src="assets/branding/dresscode20.webp"\n          alt="Referencia de traje formal para ellos"\n          class="h-48 w-full object-contain sm:h-56"\n          loading="lazy"\n          decoding="async"\n        />\n        <div class="p-5">\n          <h3 class="text-xl font-semibold text-[#957845]">Ellos</h3>\n          <p class="mt-2 text-base leading-relaxed text-[#957845]">Traje formal, camisa y zapatos de vestir.</p>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DressCodeComponent, { className: "DressCodeComponent", filePath: "app/components/dress-code/dress-code.component.ts", lineNumber: 9 });
})();

// src/app/components/gallery/gallery.component.ts
var GalleryComponent = class _GalleryComponent {
  static \u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], decls: 4, vars: 0, consts: [["id", "galeria", 1, "relative", "overflow-hidden"], [1, "absolute", "inset-0", "-z-10", "bg-[radial-gradient(circle_at_top,rgba(196,168,159,0.08),transparent_55%)]"], [1, "mx-auto", "flex", "w-full", "max-w-6xl", "flex-col", "items-center", "justify-center", "gap-10", "px-4", "py-16", "text-center", "sm:px-6", "lg:px-8", "lg:py-24"], ["src", "assets/branding/foto01_12.png", "alt", "Iniciales de los novios", "loading", "lazy", "decoding", "async", 1, "mx-auto", "h-auto", "w-full", "max-w-3xl", "object-contain"]], template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "div", 2);
      \u0275\u0275domElement(3, "img", 3);
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{ selector: "app-gallery", imports: [], template: '<section id="galeria" class="relative overflow-hidden">\n<div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(196,168,159,0.08),transparent_55%)]"></div>\n<div class="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">\n  <img\n    src="assets/branding/foto01_12.png"\n    alt="Iniciales de los novios"\n    loading="lazy"\n    decoding="async"\n    class="mx-auto h-auto w-full max-w-3xl object-contain"\n  />\n</div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "app/components/gallery/gallery.component.ts", lineNumber: 8 });
})();

// src/app/directives/reveal-on-scroll.directive.ts
var RevealOnScrollDirective = class _RevealOnScrollDirective {
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  observer = null;
  static scrollDirection = "down";
  static lastScrollTop = 0;
  constructor() {
    if (!document.body.dataset["scrollListenerActive"]) {
      document.body.dataset["scrollListenerActive"] = "true";
      window.addEventListener("scroll", _RevealOnScrollDirective.handleGlobalScroll, { passive: true });
    }
  }
  static handleGlobalScroll = () => {
    const scrollTop = window.scrollY;
    _RevealOnScrollDirective.scrollDirection = scrollTop > _RevealOnScrollDirective.lastScrollTop ? "down" : "up";
    _RevealOnScrollDirective.lastScrollTop = scrollTop;
  };
  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;
    this.renderer.addClass(element, "transition-all");
    this.renderer.addClass(element, "duration-700");
    this.renderer.addClass(element, "ease-out");
    this.renderer.addClass(element, "motion-reduce:transition-none");
    this.renderer.addClass(element, "opacity-0");
    this.initializeHiddenState(element);
    if (typeof IntersectionObserver === "undefined") {
      this.revealElement(element);
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.revealElement(entry.target);
        } else {
          this.hideElement(entry.target);
        }
      }
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px"
    });
    this.observer.observe(element);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
  initializeHiddenState(element) {
    const direction = _RevealOnScrollDirective.scrollDirection;
    if (direction === "down") {
      this.renderer.addClass(element, "translate-y-6");
      this.renderer.removeClass(element, "-translate-y-6");
    } else {
      this.renderer.addClass(element, "-translate-y-6");
      this.renderer.removeClass(element, "translate-y-6");
    }
  }
  revealElement(element) {
    this.renderer.removeClass(element, "opacity-0");
    this.renderer.removeClass(element, "translate-y-6");
    this.renderer.removeClass(element, "-translate-y-6");
    this.renderer.addClass(element, "opacity-100");
    this.renderer.addClass(element, "translate-y-0");
  }
  hideElement(element) {
    const direction = _RevealOnScrollDirective.scrollDirection;
    this.renderer.removeClass(element, "opacity-100");
    this.renderer.removeClass(element, "translate-y-0");
    this.renderer.addClass(element, "opacity-0");
    if (direction === "down") {
      this.renderer.addClass(element, "translate-y-6");
      this.renderer.removeClass(element, "-translate-y-6");
    } else {
      this.renderer.addClass(element, "-translate-y-6");
      this.renderer.removeClass(element, "translate-y-6");
    }
  }
  static \u0275fac = function RevealOnScrollDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevealOnScrollDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RevealOnScrollDirective, selectors: [["", "appRevealOnScroll", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevealOnScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[appRevealOnScroll]",
      standalone: true
    }]
  }], () => [], null);
})();

// src/app/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 0, consts: [["id", "despedida", 1, "relative", "overflow-hidden", "bg-gradient-to-b", "from-[#f6efe6]", "via-[#f9f5ef]", "to-[#efe4d5]"], [1, "pointer-events-none", "absolute", "inset-0", "opacity-60"], [1, "absolute", "-top-24", "-left-20", "h-72", "w-72", "rounded-full", "bg-[#d8bd94]/30", "blur-3xl"], [1, "absolute", "-right-20", "bottom-0", "h-64", "w-64", "rounded-full", "bg-[#c8a97e]/25", "blur-3xl"], [1, "relative", "mx-auto", "max-w-4xl", "px-6", "py-20", "text-center", "sm:px-8", "lg:py-24"], [1, "text-xs", "tracking-[0.32em]", "text-[#8f7348]", "uppercase", "sm:text-sm"], [1, "mx-auto", "mt-6", "max-w-2xl", "text-2xl", "leading-relaxed", "text-[#6f5735]", "sm:text-3xl"], [1, "mx-auto", "mt-8", "h-px", "w-32", "bg-[#957845]/40"], [1, "mt-8", "text-base", "text-[#7c6541]", "sm:text-lg"], [1, "mt-2", "text-2xl", "font-medium", "tracking-wide", "text-[#957845]", "sm:text-3xl"], ["href", "#inicio", 1, "mt-10", "inline-flex", "items-center", "justify-center", "rounded-full", "border", "border-[#957845]/50", "bg-white/60", "px-6", "py-2.5", "text-sm", "font-medium", "tracking-wide", "text-[#7a603b]", "transition-colors", "duration-200", "hover:bg-white"], [1, "mt-8", "text-xs", "tracking-[0.2em]", "text-[#8f7348]", "uppercase", "sm:text-sm"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6, "Gracias por acompa\xF1arnos");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "h2", 6);
      \u0275\u0275text(8, " El amor es nuestra promesa y ustedes son el testimonio de nuestra felicidad. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(9, "div", 7);
      \u0275\u0275domElementStart(10, "p", 8);
      \u0275\u0275text(11, "Con cari\xF1o,");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "p", 9);
      \u0275\u0275text(13, "A & M");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "a", 10);
      \u0275\u0275text(15, " Volver al inicio ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p", 11);
      \u0275\u0275text(17, "Nos casamos \xB7 2026");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [], template: '<footer id="despedida" class="relative overflow-hidden bg-gradient-to-b from-[#f6efe6] via-[#f9f5ef] to-[#efe4d5]">\n  <div class="pointer-events-none absolute inset-0 opacity-60">\n    <div class="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#d8bd94]/30 blur-3xl"></div>\n    <div class="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#c8a97e]/25 blur-3xl"></div>\n  </div>\n\n  <div class="relative mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-24">\n    <p class="text-xs tracking-[0.32em] text-[#8f7348] uppercase sm:text-sm">Gracias por acompa\xF1arnos</p>\n\n    <h2 class="mx-auto mt-6 max-w-2xl text-2xl leading-relaxed text-[#6f5735] sm:text-3xl">\n      El amor es nuestra promesa y ustedes son el testimonio de nuestra felicidad.\n    </h2>\n\n    <div class="mx-auto mt-8 h-px w-32 bg-[#957845]/40"></div>\n\n    <p class="mt-8 text-base text-[#7c6541] sm:text-lg">Con cari\xF1o,</p>\n    <p class="mt-2 text-2xl font-medium tracking-wide text-[#957845] sm:text-3xl">A &amp; M</p>\n\n    <a\n      href="#inicio"\n      class="mt-10 inline-flex items-center justify-center rounded-full border border-[#957845]/50 bg-white/60 px-6 py-2.5 text-sm font-medium tracking-wide text-[#7a603b] transition-colors duration-200 hover:bg-white"\n    >\n      Volver al inicio\n    </a>\n\n    <p class="mt-8 text-xs tracking-[0.2em] text-[#8f7348] uppercase sm:text-sm">Nos casamos \xB7 2026</p>\n  </div>\n</footer>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "app/components/footer/footer.component.ts", lineNumber: 8 });
})();

// src/app/pages/home/home-page.component.ts
var HomePage = class _HomePage {
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], decls: 22, vars: 0, consts: [[1, "min-h-screen", "w-full", "bg-transparent", "text-[#5a5047]"], ["appRevealOnScroll", ""]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-start");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 1);
      \u0275\u0275element(5, "app-gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 1);
      \u0275\u0275element(7, "app-maps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 1);
      \u0275\u0275element(9, "app-countdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 1);
      \u0275\u0275element(11, "app-itinerary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 1);
      \u0275\u0275element(13, "app-dress-code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 1);
      \u0275\u0275element(15, "app-gift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 1);
      \u0275\u0275element(17, "app-user-form");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 1);
      \u0275\u0275element(19, "app-user-music");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 1);
      \u0275\u0275element(21, "app-footer");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [UserMusicComponent, UserFormComponent, HeaderComponent, GiftComponent, CountdownComponent, MapsComponent, StartComponent, ItineraryComponent, DressCodeComponent, GalleryComponent, RevealOnScrollDirective, FooterComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [UserMusicComponent, UserFormComponent, HeaderComponent, GiftComponent, CountdownComponent, MapsComponent, StartComponent, ItineraryComponent, DressCodeComponent, GalleryComponent, RevealOnScrollDirective, FooterComponent], template: '<main class="min-h-screen w-full bg-transparent text-[#5a5047]">\n  <app-header/>\n  <div appRevealOnScroll><app-start/></div>\n  <div appRevealOnScroll><app-gallery/></div>\n  <div appRevealOnScroll><app-maps/></div>\n  <div appRevealOnScroll><app-countdown/></div>\n  <div appRevealOnScroll><app-itinerary/></div>\n  <div appRevealOnScroll><app-dress-code/></div>\n  <div appRevealOnScroll><app-gift/></div>\n  <div appRevealOnScroll><app-user-form/></div>\n  <div appRevealOnScroll><app-user-music/></div>\n  <div appRevealOnScroll><app-footer/></div>\n</main>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "app/pages/home/home-page.component.ts", lineNumber: 22 });
})();
export {
  HomePage as default
};
//# sourceMappingURL=chunk-2JXUOZMD.js.map
