// 根据数组中元素item.lable去重
private setFilterData () {
    const nodesLabelObject = {};
    const nodesLabelSet = [];
    this.renderData.nodes.forEach(item => {
        if (!nodesLabelObject[item.label]) {
            nodesLabelSet.push({
                name: item.label,
                displayName: item.displayName,
                checked: true,
            });
            nodesLabelObject[item.label] = true;
        }
    });
    this.filterAllNodes = nodesLabelSet;
    const relationLabelObject = {};
    const relationLabelSet = [];

    this.renderData.edges.forEach(item => {
        if (!relationLabelObject[item.label]) {
            relationLabelSet.push({
                name: item.label,
                displayName: item.value,
                checked: true,
            });
            relationLabelObject[item.label] = true;
        }
    });
    this.filterAllRelations = relationLabelSet;
}
