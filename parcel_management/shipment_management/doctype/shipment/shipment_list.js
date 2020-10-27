frappe.listview_settings['Shipment'] = {
    add_fields: ['status'],
    filters: [
        ['status', '!=', 'Received'],
    ],
    hide_name_column: true,

    get_indicator(doc) {
        switch (doc.status) {
            case 'Open':
                return [__('Open'), 'blue', 'status,=,Open']
            case 'In Transit':
                return [__('Open'), 'orange', 'status,=,In Transit']
            case 'Received':
                return [__('Received'), 'green', 'status,=,Received']
        }
    }
}