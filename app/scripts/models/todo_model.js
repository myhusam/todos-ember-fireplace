/*global Ember*/
TodosEmberFireplace.Todo = FP.Model.extend({
    title: FP.attr('string'),

    isCompleted: FP.attr('boolean')
});
