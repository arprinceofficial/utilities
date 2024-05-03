findcontainer(container_list, qcs_dtl_data) {
    let findContainer = container_list.map((item) => {
        let find = qcs_dtl_data.find((data) => {
            return data.container_id == item.id
        })
        if (find) {
            return {
                ...find
            }
        }
        else {
            return {
                ...item,
                container_id: item.id,
                qc_stage_id: null,
                qc_person_id1: null,
                qc_person_id2: null,
                sample_qty: null,
                sample_size: null,
                sample_size_unit: null,
                sample_remark: null,
                qc_sample_id: null,
                qc_sample_dtl_id: null,
            }
        }
    })
    this.container_list = findContainer;
    console.log('findContainer', findContainer)
};

// ---------------------------------------------------------------------------------
findcontainer(container_list, qcs_dtl_data) {
    let findContainer = container_list.map((containerData) => {
        let findContainerNo = qcs_dtl_data.find((tableData) => {
            return tableData.container_no == containerData.container_no
        })
        if (!findContainerNo) {
            return {
                data: { containerData },
            }

        }
    })
    console.log('findContainer', findContainer)
};

// ------------------------------------- * Success * --------------------------------------------

findcontainer(container_list, qcs_dtl_data) {
    let findContainer = container_list.map((containerData) => {
        let findContainerNo = qcs_dtl_data.find((tableData) => {
            return tableData.container_no == containerData.container_no
        })
        if (!findContainerNo) {
            return containerData
        }
    })
    this.filterContainerData = findContainer.filter((data) => {
        return data != undefined
    })
    console.log('filterContainerData', this.filterContainerData)
};


// --------------------------------------- map ------------------------------------------

findcontainer(container_list, qcs_dtl_data) {
    let findContainer = qcs_dtl_data.map((item) => {
        return container_list.find((container) => container.container_no != item.container_no);
    })
    console.log('filterContainerData', findContainer)
};
// ------------------------------------reduce ---------------------------------------------
findcontainer(container_list, qcs_dtl_data) {
    let findContainer = qcs_dtl_data.reduce((item) => {
        return container_list.find((container) => container.container_no != item.container_no);
    })
    console.log('filterContainerData', findContainer)
};