const initApp = () => {
   
      
    const orderConfirm = localStorage.getItem("OrderConfirm");

    if (orderConfirm) {
        const orders = JSON.parse(orderConfirm);
        const tableBody = document.querySelector('table tbody');

        orders.forEach((order, index) => {
            const orderId = index + 1;
            const orderDetails = order[`order${orderId}`];

            if (orderDetails && orderDetails.length > 0) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${orderId}</td>
                    <td>
                        ${orderDetails.map(item => `
                            <div>
                                <p>${item.name}</p>
                            </div>
                        `).join('')}
                    </td>
                    <td>
                        <select id="payment${orderId}" class="optionSelector" onchange="checkAllSelected()">
                            <option value="Paid">Paid</option>
                            <option value="notyetpaid">Not paid yet</option>
                        </select>
                    </td>
                    <td>
                        <select id="state${orderId}" class="optionSelector" onchange="checkAllSelected()">
                            <option value="Served">Served</option>
                            <option value="Notyetserved">Not yet served</option>
                        </select>
                    </td>
                `;
                tableBody.appendChild(row);
            }
        });
    }
}

initApp();