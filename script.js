function capitalizeName(name) {
    return name.toUpperCase();
}

function getCurrentFormattedDate() {
    const date = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

const formattedDate = getCurrentFormattedDate();
function formatNumberToMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateEmail() {
    const customerName = document.getElementById('customerName').value.trim();
    const amountDisbursed = formatNumberToMoney(document.getElementById('amountDisbursed').value);
    const amountToPay = formatNumberToMoney(document.getElementById('amountToPay').value);
    const customerAddress = document.getElementById('customerAddress').value.trim();
    if (customerName === '' || amountDisbursed === '' || amountToPay === '') {
        alert('Please fill in all fields');
        return;
    }

    const capitalizedCustomerName = capitalizeName(customerName);

    const subject = `<h2>DEMAND NOTICE ON THE INDEBTEDNESS OF <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold></h2>`;
    const body = `
    <bold bold style="font-weight: bold">${formattedDate}</bold>
    <br/>
    Attn: <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>
    <br/>
    <bold bold style="font-weight: bold; font-style: italic">${capitalizeName(customerAddress)} </bold>
    <p>Fairmoney Microfinance Bank is in custody of your executed contract in favour of <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold> whom we availed the sum of <bold style="font-weight: bold">₦ ${amountDisbursed}.00</bold>
    <br/>
    <br/>
    Consequently, you have reneged and not complied with the terms and conditions of your loan agreement with us. This is evidenced by your inability to honor your repayments. Your outstanding balance owed as at today ₦ <bold style="font-weight: bold"> ${amountToPay}.00</bold>
    <br/>
    <br/>
    The bank views your action as totally Unacceptable. Without prejudice, <bold style="font-weight: bold">We are by this mail, giving you 2 working days to regularize your outstanding payment,</bold> failure to comply, We would be taking robust recovery actions in line with the ambit of the law. I am hopeful we can resolve this without going through legal proceedings or commissioning an external debt recovery agency to pursue this debt. Feel free to contact us if you would like to discuss payment options.
    <br/>
    <br/>
    It is our earnest hopes you digest the above and be guided accordingly.
    <br/>
    <br/>
    <i bold style="font-weight: bold">
    You can pay into your FairMoney Microfinance bank account, login into the app and click on ‘’repay” and follow the prompt to make payment. We are here to assist you through this process. For any inquiries or assistance, please don't hesitate to call us on +2347080112196 or +2347043982496, or send an email to <a href="mailto:collections@fairmoney.io">collections@fairmoney.io</a>.
    </i>  
    </p>`;

    document.getElementById('emailSubject').innerHTML = subject;
    document.getElementById('emailBody').innerHTML = body;
}

function generateFollowUpEmail() {
    const customerName = document.getElementById('customerName').value.trim();
    const amountToPay = formatNumberToMoney(document.getElementById('amountToPay').value);
    const customerAddress = document.getElementById('customerAddress').value.trim();
    if (customerName === '' || amountToPay === '') {
        alert('Please fill in all fields');
        return;
    }

    const capitalizedCustomerName = capitalizeName(customerName);

    const subject = `<h2>FINAL DEMAND NOTICE ON THE INDEBTEDNESS OF <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold></h2>`;
    const body = `
    <br/>
    <bold bold style="font-weight: bold">
    ${formattedDate}
    </bold>
    <br/>
    Attn: <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>
    <br/>
    <bold bold style="font-weight: bold; font-style: italic">${capitalizeName(customerAddress)} </bold>
    <br/>
    <br/>
    The records before us <bold bold style="font-weight: bold"> FAIRMONEY MICROFINANCE BANK </bold>, shows that you have failed, vehemently refused, and neglected to honour your obligations under the loan agreement with us by not paying your monthly installments as at when due.
    We hereby take cognizance of the various demand notices sent to you. TAKE NOTICE, therefore, that if you do not settle your outstanding/indebtedness to us in the sum of <bold bold style="font-weight: bold">${amountToPay} NGN </bold> representing outstanding installments and associated charges as at today, we shall proceed and take legal actions on you.
    <br/>
    <br/>
    You are expected to regularize your account with us within <bold bold style="font-weight: bold"> (24)hours </bold>  of this notice.
    <br/>
    <br/>
    Be guided accordingly.
    <br/>
    <br/>
    <i bold style="font-weight: bold">
    You can pay into your FairMoney Microfinance bank account, login into the app and click on ‘’repay” and follow the prompt to make payment. We are here to assist you through this process. For any inquiries or assistance, please don't hesitate to call us on +2347080112196 or +2347043982496, or send an email to <a href="mailto:collections@fairmoney.io">collections@fairmoney.io</a>.
    </i>  
    `;

    document.getElementById('emailSubject').innerHTML = subject;
    document.getElementById('emailBody').innerHTML = body;
}
