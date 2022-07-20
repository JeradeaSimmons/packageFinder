const packages = [{
    name: 'Pkg 1',
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
    missingPackage: true
},
{
    name: 'Pkg 2',
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    missingPackage: false
},
{
    name: 'Pkg 3',
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    missingPackage: false
},
{
    name: 'Pkg 4',
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    missingPackage: false
},
{
    name: 'Pkg 5',
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    missingPackage: false
},
{
    name: 'Pkg 6',
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    missingPackage: false
},
{
    name: 'Pkg 7',
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    missingPackage: false
}]



for (let i = 0; i < packages.length; i++) {
    let pkg = packages[i]
    console.log(pkg.name, pkg.to);

}

let foundPackage = null

for (let i = 0; i < packages.length; i++) {
    let pkg = packages[i]
    if (pkg.trackingNumber == '8081baz') {
        foundPackage = pkg
    }
}
console.log('package found', foundPackage);

let potentialPkgs = packages
function drawPackages() {
    let template = ''
    potentialPkgs.forEach(p => template += `<div class="col-2 btn btn-warning" onclick="find('${p.name}')">${p.name}</div>`)
    let pkgElm = document.getElementById('pkgs');

    console.log(pkgElm, template);

    pkgElm.innerHTML = template



}
drawPackages()







function filterPriority() {
    potentialPkgs = potentialPkgs.filter(p => p.priority == true)

    drawPackages()

}

function filterHeavy() {
    potentialPkgs = potentialPkgs.filter(p => p.heavy == true)

    drawPackages()

}

function filterFragile() {
    potentialPkgs = potentialPkgs.filter(p => p.fragile == true)

    drawPackages()

}

function find(name) {
    let foundPackage = potentialPkgs.find(p => p.name == name)

    console.log('found', foundPackage, name);

    if (foundPackage.missingPackage == true) {
        window.alert('found it!!')
    }
    else {
        window.alert('nope not it.')
    }
}
