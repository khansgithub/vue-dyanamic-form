<!-- TEMPLATE -->
<template>
	<DynamicForm :schema="ui_schema" />
</template>

<!-- STYLE -->
<style scoped></style>

<!-- SCRIPT -->
<script setup lang="ts">
import { ref } from 'vue';
import DynamicForm from './components/DynamicForm.vue'
import type { UISchema } from './types/ui-schema';

// var input_type: string = "FormInput"
var ui_schema: UISchema = {
	"order": {
		"name": {
			"element": "input",
			"type": "text"
		},
		"products": {
			"element": "select",
			"options": [
				{
					"value": "foo"
				},
				{
					"value": "bar"
				}
			]
		}
	},
	"properties": [
		{
			"product_name": "foo",
			"properties": {
				"element": "input",
				"type": "number"
			}
		}
	]
};
</script>
