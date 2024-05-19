<!-- TEMPLATE -->
<template>
<DynamicForm :myObject="foobar" />
</template>

<!-- STYLE -->
<style scoped>
</style>

<!-- SCRIPT -->
<script setup lang="ts">
import { ref } from 'vue';
import DynamicForm from './components/DynamicForm.vue'
import type { UI_schema_property } from './types/ui-schema';


function foo(e:Event){
  console.log(e)
}

const count = ref(0)

var input_type: string = "FormInput"
var foobar: UI_schema_property = {
  'asd': {
    "foo": "bar"
  }
};
</script>
