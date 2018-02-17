var myPythonScriptPath = 'open_xml.py';
var myPythonScriptPathJson = 'open_json.py'
var PythonShell = require('python-shell');
var nools = require("nools");

var options = {
      args: ['Rain', '2018-02-13', '15:00:00']
    };


PythonShell.run('open_xml.py', options, function (err, results) {
    if (err) throw err;
    //console.log(results);
    //res.push(results[0])
    this.vr = results


    for (var i in results) {
        //res.push(results[i])
        console.log(results[i]);
        console.log('transform to nools');

        var Message = function (message) {
            this.text = message;
        };

        var nok = ""
        var flow = nools.flow("Ruleml transform", function (flow) {

            //find any message that is exactly hello world
            flow.rule("Ruleml", [Message, "out", "out.text =~ /^" + results[i] + "/"], function (facts) {
                //console.log(facts.out.text);
                nok = facts.out.text;
            });

        });
        var session = flow.getSession();

        //var sp = results[i].split(", ")
        PythonShell.run('open_json.py', options, function (err, results) {
            for (var i in results) {
                //res.push(results[i])
                session.assert(new Message(results[i]));
                //console.log(results[i]);
                var sp = results[i].split(", ")
                //console.log(sp[0])

            }
            session.match()

            for (var i in results) {
                //res.push(results[i])
                if (nok == results[i]) {
                    console.log(results[i] + " -> PAS CONSEILLE à cause de la meteo : " + options['args'][0])
                } else {
                    console.log(results[i] + " -> CONSEILLE")
                }
                //console.log(results[i]);
                var sp = results[i].split(", ")
                //console.log(sp[0])
            }
        });
    }
});


