<template>
  <div class="overflow-x-auto min-w-min">
    <table class="w-full">
      <thead class="border-b border-dashed border-gray-200">
        <tr class="text-gray-500">
          <th class="th text-left">item ({{ props.data.length }})</th>
          <th class="th text-left">quantity</th>
          <th class="th text-right">unit price</th>
          <th class="th text-right">amount</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="(row, rowIndex) in props.data" :key="rowIndex">
          <td
            v-for="(value, key, index) in row"
            :key="key"
            :class="[
              'td',
              [2, 3].includes(index) ? 'text-right' : 'text-left',
              index === 0 ? 'max-w-64 overflow-hidden text-ellipsis' : ''
            ]"
            :title="String(value)"
          >
            {{ value }}
            <span v-if="[2, 3].includes(index)" class="pl-1 uppercase text-gray-500">USD</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type DataRow = {
  name: string
  quantity: string | number
  unitPrice: string | number
  amount: string | number
}

const props = withDefaults(
  defineProps<{
    data?: DataRow[]
  }>(),
  {
    data: () => [
      { name: 'Chair KS8671', quantity: '6', unitPrice: '$332.95', amount: '$1,997.70' },
      { name: 'Pillow FT1241', quantity: '2', unitPrice: '$50.95', amount: '$101.90' },
      { name: 'TV Unit OSK112', quantity: '1', unitPrice: '$1,250.50', amount: '$1,250.50' },
      { name: 'Table VGY716', quantity: '1', unitPrice: '$1,725.25', amount: '$1,725.25' },
      { name: 'Sofa OG00GY', quantity: '1', unitPrice: '$13,332.95', amount: '$13,332.95' },
      { name: 'Sofa OG00GY', quantity: '1', unitPrice: '$13,332.95', amount: '$13,332.95' },
      { name: 'Bed Frame 812HYG87', quantity: '1', unitPrice: '$9,125.95', amount: '$9,125.95' },
      {
        name: 'Sliding Door Cupboard 0912GD712',
        quantity: '1',
        unitPrice: '$25,250.95',
        amount: '$25,250.95'
      },
      { name: 'Bed Cover 1124FH8', quantity: '3', unitPrice: '$115.95', amount: '$347.80' }
    ]
  }
)
</script>

<style modules>
.th {
  @apply py-2 px-6 text-xs font-medium tracking-wider uppercase;
}

.td {
  @apply px-6 py-2 text-sm whitespace-nowrap;
}
</style>
