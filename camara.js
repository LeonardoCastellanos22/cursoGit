var TOKEN = 'BBFF-MUDDPdoNZT2soyNN7ABMCFRLJO6JDH';
var VARIABLE = 'tiempopresencia';

function getDataFromVariable(variable, token, callback) {
  var url = 'https://industrial.api.ubidots.com/api/v1.6/variables/' + variable + '/values/?page_size=1';
  var headers = {
    'X-Auth-Token': token,
    'Content-Type': 'application/json'
  };
  
  $.ajax({
    url: url,
    method: 'GET',
    headers: headers,
    success: function (res) {
      callback(res.results);
    }
  })
}

getDataFromVariable(VARIABLE, TOKEN, function (values) {
    var data = values.forEach(function (value) {
    console.log(value.context+value.value);
    

  });
});
