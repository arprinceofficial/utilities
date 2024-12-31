<p class="text-[15px]">{{ formateCalDate(data.pre_selected_number_of_days, store_date) }}</p>

const store_date = useState('store_date', () => '')

watch(() => props.data.value, () => {
    if (props.data.pre_selected && props.data.pre_selected_col_name === props.data.pre_selected_col_name) {
        store_date.value = props.data.value
    }
    if (props.preview) {
        check_data()
    }
})

const formateCalDate = (days, store_date) => {
    if (store_date) {
        let date = new Date(store_date)
        let new_date = addDays(date, days)
        return convert(new_date)
    }
    return ''
};
