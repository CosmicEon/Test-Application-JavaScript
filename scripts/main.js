const headText = document.getElementsByClassName('tab-three-head');
const bodyText = document.getElementsByClassName('tab-three-body');

// Collapsible menu
const tabGroup = document.getElementById('tab-three-group');

tabGroup.addEventListener('click', (ev) => {
    const that = ev.target;

    // If it is a head item
    if (that.classList.contains('tab-three-head')) {
        const imgArrow = document.getElementsByClassName('tab-arrow');

        // Reset properties to all items to disabled
        Array.from(headText).forEach((el) => {
            el.style = 'border-bottom: none;';
        });
        Array.from(bodyText).forEach((el) => {
            el.classList.remove('active-body');
        });
        Array.from(imgArrow).forEach((el) => {
            el.src = './assets/icons/arrow_down.svg';
        });

        const img = that.childNodes[3];
        const textElement = that.nextElementSibling;

        // Sets the properties for the target item to be active
        that.style = 'border-bottom: 1px solid #878787;';
        img.src = './assets/icons/arrow_up.svg';
        textElement.classList.add('active-body');
    }
}, false);

// Tabs for Collapsible menu
const tabMenu = document.getElementsByClassName('tab-three-top-menu')[0];

tabMenu.addEventListener('click', (ev) => {
    const that = ev.target;

    // Reset active property to the item
    const tabEl = document.getElementsByClassName('tab-li');
    Array.from(tabEl).forEach((el) => {
        el.classList.remove('active-item-tab');
    });

    // Sets active property for the target item
    that.classList.add('active-item-tab');

    //  Changes content for the target item
    if (indexOfNode(that) === 1) {
        changeContent(0);
    } else if (indexOfNode(that) === 3) {
        changeContent(1);
    } else {
        changeContent(2);
    }
}, false);

function indexOfNode(node) {
    const children = node.parentNode.childNodes;
    for (let i = 0; i < children.length; i++) {
        // returns only nodes
        if (children[i] === node) {
            return i;
        }
    }

    return -1;
}

function changeContent(position) {
    for (let i = 0; i < headText.length; i++) {
        headText[i].childNodes[1].innerHTML = tabContent[position][i].title;
    }
    for (let i = 0; i < bodyText.length; i++) {
        bodyText[i].childNodes[1].innerHTML = tabContent[position][i].content;
    }
}

// Content for the different tabs
const tabContent = [
    [
        {
            title: 'Какво ще научите?',
            content: 'Има много различни устройства, които могат да бъдат наречени 3D скенери. Всеки уред, който измерва физическия свят, използвайки лазер, светлинни или рентгенови лъчи, и генерира „облак“ от плътни точки или многоъгълни отвори, може да се счита за 3D скенер. Тези устройства имат много имена, включително 3D дигитализатори, лазерни скенери, скенери с бяла светлина, индустриална компютърна томография, LiDar (съчетание между „light“ и „radar“; технология с дистанционно наблюдение, която измерва разстоянието, като осветява обект с лазер и анализира отразената светлина) и други. Общото между всички тези технологии е, че те хващат геометрията на физически обекти чрез стотици хиляди или милиони измервания.',
        },
        {
            title: 'За кого са подходящи?',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio commodi, iure assumenda, perferendis at voluptates harum eum, culpa aliquid et voluptatum tempore saepe laudantium vero sapiente quo totam! Soluta, ab?',
        },
        {
            title: 'Продължителност',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo neque veritatis nulla saepe reiciendis dignissimos sunt provident tenetur, velit, odio officiis quasi, nostrum maxime? Alias animi temporibus blanditiis accusamus.',
        },
        {
            title: 'Продължителност',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae vero quisquam, aliquid doloremque repudiandae voluptatum vel hic architecto molestias repellat eum quod. Perferendis distinctio nihil maxime, iusto quod asperiores?',
        },
        {
            title: 'Програма',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ducimus minima possimus et adipisci expedita, exercitationem, impedit excepturi delectus autem quo quidem neque cumque nostrum nobis! Qui laudantium dolore vero.',
        },
    ],
    [
        {
            title: 'Какво ще научите за тиймбилдингите?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem necessitatibus natus modi voluptate corrupti expedita porro ad fuga similique aliquam dolorum, nisi sint nemo quibusdam, possimus amet voluptates ut dicta.',
        },
        {
            title: 'За кого са подходящи тиймбилдингите?',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, non obcaecati! Sapiente itaque quisquam dolorum libero, optio tenetur ab velit? Laudantium consectetur voluptate, fugiat asperiores reprehenderit et odit repudiandae sequi!',
        },
        {
            title: 'Продължителност на тиймбилдингите',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex deleniti, voluptatum natus quis sequi hic saepe debitis facilis commodi doloribus quas magni, aspernatur illum aliquam nam harum? Quas, voluptate beatae?',
        },
        {
            title: 'Продължителност на тиймбилдингите',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos numquam voluptatem corrupti molestias esse vel, excepturi temporibus! Quia nulla officia doloribus tempora eius deserunt repudiandae ea neque, sunt pariatur?',
        },
        {
            title: 'Програма на тиймбилдингите',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio rerum deserunt ipsa, ratione, illum libero fugit nesciunt eligendi quidem quasi beatae perferendis tenetur repellat velit consectetur non. Autem, pariatur ipsam!',
        },
    ],
    [
        {
            title: 'Какво ще научите за консултациите?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor fugiat aperiam officiis consequuntur expedita ullam et voluptatem unde dolorem, voluptas doloremque sunt id deleniti voluptatibus error sed earum deserunt nisi.',
        },
        {
            title: 'За кого са подходящи консултациите?',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quasi quae porro tenetur neque, ad recusandae impedit, facere suscipit eius officia eaque maiores eligendi explicabo expedita mollitia velit debitis tempora.',
        },
        {
            title: 'Продължителност на консултациите',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa unde repellat, aspernatur obcaecati eius voluptatibus ad quaerat reprehenderit maiores distinctio rerum, esse tempora similique? Iusto, placeat! Quaerat recusandae sit aspernatur.',
        },
        {
            title: 'Продължителност на консултациите',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quam quia unde facere? Quia libero omnis mollitia obcaecati sunt quas doloremque culpa adipisci quam, expedita, itaque consequatur, officiis magni amet.',
        },
        {
            title: 'Програма на консултациите',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, nesciunt! Dolorum aliquid assumenda praesentium molestiae inventore consequatur ullam rerum doloribus eos in possimus eligendi iusto, nemo quos odit nobis esse.',
        },
    ],
];
