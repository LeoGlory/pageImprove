$(function(){
    $('#table1').bootstrapTable({
        columns: [{
            field: 'id',
            title: '创建人'
        }, {
            field: 'date',
            title: '创建日期'
        }, {
            field: 'bank',
            title: '创建人所属分行'
        }]
        /* ,
        data: [{
            id: '张三',
            date: '2018-11-11',
            bank: '长沙支行'
        }] */
    });
    
    $('#add1').click(function(){
        var data  = [{
            id: '张三',
            date: '2018-11-11',
            bank: '长沙支行'
        }]
        $('#table1').bootstrapTable('load',data);
    })
    $('#reduce1').click(function(){
        $('#table1').bootstrapTable('removeAll');
    })
})