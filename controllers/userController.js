const puppeteer = require('puppeteer');
const path = require('path');

const Form = require('../models/Form');
const { response } = require('express');

const index = (req, res, next) => {
    Form.find()
    .then(response => {
            res.json({
                    response
                }
            )
        }
    )
    .catch(
        error => {
            res.json({
                    message: "An error occured!"
                }
            )
        }
    )
}

const show = (req, res, next) => {
    let formID = req.body.formID;
    Form.findById(formID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured"
        })
    })
}

const store = (req, res, next) =>{
    let form = new Form({
        input1: req.body.input1,
        input2: req.body.input2,
        input3: req.body.input3,
        input4: req.body.input4,
        input5: req.body.input5,
        input6: req.body.input6,
        input7: req.body.input7,
        input8: req.body.input8,
        input9: req.body.input9,
        input10: req.body.input10,
        input11: req.body.input11,
        input12: req.body.input12,
        input13: req.body.input13,
        input14: req.body.input14,
        input15: req.body.input15,
        input16: req.body.input16,
        input17: req.body.input17,
        input18: req.body.input18,
        input19: req.body.input19,
        input20: req.body.input20,
        input21: req.body.input21,
        input22: req.body.input22,
        input23: req.body.input23,
        input24: req.body.input24,
        input25: req.body.input25,
        input26: req.body.input26,
        input27: req.body.input27,
        input28: req.body.input28,
        input29: req.body.input29,
        input30: req.body.input30,
        input31: req.body.input31,
        input32: req.body.input32,
        input33: req.body.input33,
        input34: req.body.input34,
        input35: req.body.input35,
        input36: req.body.input36,
        input37: req.body.input37,
        input38: req.body.input38,
        input39: req.body.input39,
        input40: req.body.input40,
        input41: req.body.input41,
        input42: req.body.input42,
        check1: req.body.check1,
        check2: req.body.check2,
        check3: req.body.check3,
        check4: req.body.check4,
        check5: req.body.check5,
        check6: req.body.check6,
        check7: req.body.check7,
        check8: req.body.check8,
        check9: req.body.check9,
        check10: req.body.check10,
        check11: req.body.check11,
        check12: req.body.check12,
        check13: req.body.check13,
        check14: req.body.check14,
        check15: req.body.check15,
        check16: req.body.check16,
        check17: req.body.check17,
        check18: req.body.check18,
        check19: req.body.check19,
        check20: req.body.check20,
        check21: req.body.check21,
        check22: req.body.check22,
        check23: req.body.check23,
        check24: req.body.check24,
        check25: req.body.check25,
        check26: req.body.check26,
        check27: req.body.check27,
        check28: req.body.check28,
        check29: req.body.check29,
        check30: req.body.check30,
        check31: req.body.check31,
        check32: req.body.check32,
        check33: req.body.check33,
        check34: req.body.check34,
        check35: req.body.check35,
        check36: req.body.check36,
        check37: req.body.check37,
        check38: req.body.check38,
        check39: req.body.check39,
        check40: req.body.check40,
        check41: req.body.check41,
        check42: req.body.check42,
        check43: req.body.check43,
        check44: req.body.check44,
        check45: req.body.check45,
        check46: req.body.check46,
        check47: req.body.check47,
        check48: req.body.check48,
        uv: req.body.uv,
        fn: req.body.fn,
    })
    form.save()
    .then(response => {
        res.json({
            message: "form added"
        })
       
    })
    .catch(error => {
        res.json({
            message: "error"
        })
    })
}

const loadReport = async(req, res)=>{
    try{
        res.render('report', {})
    }catch(error){
        res.status().send({success: false, message: error.message});
    }
}

const loadForm = async(req, res)=>{
    try{
        res.render('form', {});
    }catch(error){
        res.status().send({success: false, message: error.message});
    }
}

const generateReport = async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Wait for the page to load completely before proceeding
        await page.goto(`${req.protocol}://${req.get('host')}/users/report`, {
            waitUntil: 'networkidle2'
        });

        // Set viewport size
        await page.setViewport({ width: 1600, height: 1050 });

        // Generate PDF
        const todayDate = new Date();
        const pdfPath = path.join(__dirname, "../public/files", `${todayDate.getTime()}.pdf`);

        await page.pdf({
            path: pdfPath,
            printBackground: true,
            format: "A4",
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="height: 16px;"></div>
            `,
            footerTemplate: `
                <div style="height: 16px;"></div>
            `,
            margin: {
                top: "16px",
                right: "16px",
                bottom: "16px",
                left: "16px"
            }
        });

        await browser.close();

        // Send the generated PDF file as a response
        res.set({
            "Content-Type": "application/pdf",
            "Content-Length": pdfPath.length
        });
        res.sendFile(pdfPath);
    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).send("Error generating PDF");
    }
};


module.exports = {
    loadReport,
    generateReport,
    loadForm,
    index,
    store,
    show
}