describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {

    it('should return numeric and success message', function () {

       expect(answer.calculateArea(8,4,1,'success','error')).toEqual({area: 8, message: 'success'});
       expect(answer.calculateArea(15,7,2,'Success','Error')).toEqual({area : 1, message : 'Success'});
       expect(answer.calculateArea(10,18,1,'Success','Error')).toEqual({ area : 8, message : 'Success'});
       expect(answer.calculateArea(11,77,2,'Success','Error')).toEqual({ area : 55, message : 'Success'});
    });

    it('should return false if argument are incorrect', function () {
       expect(answer.calculateArea('f','s','d',1,2)).toEqual(false);
       expect(answer.calculateArea('','','','','')).toEqual(false);
       expect(answer.calculateArea(3,4,'','','')).toEqual(false);
       expect(answer.calculateArea(4,2,5,'Success',8)).toEqual(false);
       expect(answer.calculateArea(4,3,'as','Success','Error')).toEqual(false);
    });

    it('should return numeric less than zero and error message', function () {
       expect(answer.calculateArea(20,30,7,'Success','Error')).toEqual({ area : -110, message : 'Error'});
       expect(answer.calculateArea(23,30,7,'Success','Error')).toEqual({ area : -131, message : 'Error'});
    });

    it('should return zero and message', function () {
       expect(answer.calculateArea(0,0,0,'Success','Error')).toEqual({ area : 0, message : 'Big null'});
    });

  });

});

