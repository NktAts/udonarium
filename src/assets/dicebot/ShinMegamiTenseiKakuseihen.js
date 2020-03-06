/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$%', '$getTwoDice', '$+', '$*', '$getCheckResultText', '$min', '$max', '$first', '$getDiceList', '$floor', '$/', '$getCheckResult', '$format', '$>=', '$getSuccessResult', '$getFailResult']);
  return (function($base, $super, $parent_nesting) {
    function $ShinMegamiTenseiKakuseihen(){};
    var self = $ShinMegamiTenseiKakuseihen = $klass($base, $super, 'ShinMegamiTenseiKakuseihen', $ShinMegamiTenseiKakuseihen);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_ShinMegamiTenseiKakuseihen_initialize_1, TMP_ShinMegamiTenseiKakuseihen_gameName_2, TMP_ShinMegamiTenseiKakuseihen_gameType_3, TMP_ShinMegamiTenseiKakuseihen_getHelpMessage_4, TMP_ShinMegamiTenseiKakuseihen_check_1D100_5, TMP_ShinMegamiTenseiKakuseihen_getTwoDice_6, TMP_ShinMegamiTenseiKakuseihen_getCheckResultText_7, TMP_ShinMegamiTenseiKakuseihen_getCheckResult_8, TMP_ShinMegamiTenseiKakuseihen_getSuccessResult_9, TMP_ShinMegamiTenseiKakuseihen_getFailResult_10;

    
    
    Opal.defn(self, '$initialize', TMP_ShinMegamiTenseiKakuseihen_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_ShinMegamiTenseiKakuseihen_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_ShinMegamiTenseiKakuseihen_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_ShinMegamiTenseiKakuseihen_initialize_1, false), $zuper, $iter)
    }, TMP_ShinMegamiTenseiKakuseihen_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_ShinMegamiTenseiKakuseihen_gameName_2 = function $$gameName() {
      var self = this;

      return "真・女神転生TRPG　覚醒篇"
    }, TMP_ShinMegamiTenseiKakuseihen_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_ShinMegamiTenseiKakuseihen_gameType_3 = function $$gameType() {
      var self = this;

      return "SMTKakuseihen"
    }, TMP_ShinMegamiTenseiKakuseihen_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_ShinMegamiTenseiKakuseihen_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定\n" + "1D100<=(目標値) でスワップ・通常・逆スワップ判定を判定。\n" + "威力ダイスは nU6[6] (nはダイス個数)でロール可能です。\n"
    }, TMP_ShinMegamiTenseiKakuseihen_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$check_1D100', TMP_ShinMegamiTenseiKakuseihen_check_1D100_5 = function $$check_1D100(total_n, _dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var $a, $b, self = this, dice1 = nil, dice2 = nil, total1 = nil, total2 = nil, isRepdigit = nil, result = nil;

      
      if (signOfInequality['$==']("<=")) {
        } else {
        return ""
      };
      total_n = total_n['$%'](100);
      $b = self.$getTwoDice(), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), (dice2 = ($a[1] == null ? nil : $a[1])), $b;
      total1 = $rb_plus($rb_times(dice1, 10), dice2);
      total2 = $rb_plus($rb_times(dice2, 10), dice1);
      isRepdigit = dice1['$=='](dice2);
      result = " ＞ スワップ";
      result = $rb_plus(result, self.$getCheckResultText(diff, [total1, total2].$min(), isRepdigit));
      result = $rb_plus(result, "／通常");
      result = $rb_plus(result, self.$getCheckResultText(diff, total_n, isRepdigit));
      result = $rb_plus(result, "／逆スワップ");
      result = $rb_plus(result, self.$getCheckResultText(diff, [total1, total2].$max(), isRepdigit));
      return result;
    }, TMP_ShinMegamiTenseiKakuseihen_check_1D100_5.$$arity = 8);
    
    Opal.defn(self, '$getTwoDice', TMP_ShinMegamiTenseiKakuseihen_getTwoDice_6 = function $$getTwoDice() {
      var $a, self = this, value = nil, dice1 = nil, dice2 = nil;

      
      value = self.$getDiceList().$first();
      value = ($truthy($a = value) ? $a : 0);
      value = value['$%'](100);
      dice1 = $rb_divide(value, 10).$floor();
      dice2 = value['$%'](10);
      return [dice1, dice2];
    }, TMP_ShinMegamiTenseiKakuseihen_getTwoDice_6.$$arity = 0);
    
    Opal.defn(self, '$getCheckResultText', TMP_ShinMegamiTenseiKakuseihen_getCheckResultText_7 = function $$getCheckResultText(diff, total, isRepdigit) {
      var self = this, checkResult = nil, text = nil;

      
      checkResult = self.$getCheckResult(diff, total, isRepdigit);
      text = self.$format("(%02d)%s", total, checkResult);
      return text;
    }, TMP_ShinMegamiTenseiKakuseihen_getCheckResultText_7.$$arity = 3);
    
    Opal.defn(self, '$getCheckResult', TMP_ShinMegamiTenseiKakuseihen_getCheckResult_8 = function $$getCheckResult(diff, total, isRepdigit) {
      var self = this;

      
      if ($truthy($rb_ge(diff, total))) {
        return self.$getSuccessResult(isRepdigit)};
      return self.$getFailResult(isRepdigit);
    }, TMP_ShinMegamiTenseiKakuseihen_getCheckResult_8.$$arity = 3);
    
    Opal.defn(self, '$getSuccessResult', TMP_ShinMegamiTenseiKakuseihen_getSuccessResult_9 = function $$getSuccessResult(isRepdigit) {
      var self = this;

      
      if ($truthy(isRepdigit)) {
        return "絶対成功"};
      return "成功";
    }, TMP_ShinMegamiTenseiKakuseihen_getSuccessResult_9.$$arity = 1);
    return (Opal.defn(self, '$getFailResult', TMP_ShinMegamiTenseiKakuseihen_getFailResult_10 = function $$getFailResult(isRepdigit) {
      var self = this;

      
      if ($truthy(isRepdigit)) {
        return "絶対失敗"};
      return "失敗";
    }, TMP_ShinMegamiTenseiKakuseihen_getFailResult_10.$$arity = 1), nil) && 'getFailResult';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
