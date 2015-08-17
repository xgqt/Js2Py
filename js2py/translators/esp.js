ES5Harness = {registerTest : function (t) {
    console.log(t.id)
    console.log(t.description)
    if (t.precondition) {
        try {
            if (t.precondition()===true) {
                console.log('Precondition PAILED')
            } else {
                console.log('Precondition FAILED')
            }
        } catch (e) {
            console.log('Error in precondition check' + e)
        }
    } else {
        console.log('No precondition...')
    }
    try {
        if (t.test() === true) {
            // report passed
            console.log('PASSED +++++')
        } else {
            // report failed
            console.log('FAILED -------------------------')
        }
    } catch (e) {
        console.log('ERROR: ' + e)
    }
}
}

function fnExists(f) {
  if (typeof(f) === "function") {
    return true;
  }
}

var supportsStrict = undefined;
function fnSupportsStrict() {
   "use strict";
   if (supportsStrict!==undefined) return supportsStrict;
   try {eval('with ({}) {}'); supportsStrict=false;} catch (e) {supportsStrict=true;};
   return supportsStrict;
  }

function fnGlobalObject() {
  return (function () {return this}).call(null);
  }


function compareArray(aExpected, aActual) {
  if (aActual.length != aExpected.length) {
    return false;
  }

  aExpected.sort();
  aActual.sort();

  var s;
  for (var i = 0; i < aExpected.length; i++) {
    if (aActual[i] != aExpected[i]) {
      return false;
    }
  }

  return true;
}


