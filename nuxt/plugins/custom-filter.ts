// import { useValidateEmail } from "~~/composables/userValidateEmail"

export default defineNuxtPlugin(() => {
    // const validateEmail = useValidateEmail()
    const config = useRuntimeConfig();
    const nuxtApp = useNuxtApp()
    const appMode = useRuntimeConfig().public.APP_MODE
    
    return {
        provide: {
            baseUrl: () => {
                return config.public.BASE_URL
            },
            baseApiUrl: () => {
                return config.public.API_URL
            },
            validateDate: (date: any) => {                
                const re = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
                return re.test(date)
            },
            validateEmail: (email: any) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(String(email).toLowerCase())
            },
            validateContactNumber: (number: any) => {
                const re = /^[\+]?[0-9]{1,3}?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,9}$/g
                return re.test(number)
            },
            validateUpperLowerCase: (string: any) => {
                let uppercase = false, lowercase = false
                for(let i=0; i<string.length; i++) {                    
                    if(/[A-Z]/.test(string[i]) && string[i]===string[i].toUpperCase()) lowercase = true
                    else if(/[a-z]/.test(string[i]) && string[i]===string[i].toLowerCase()) uppercase = true

                    if(uppercase && lowercase) break
                }

                return uppercase && lowercase ? true : false
            },
            convertToSnakeCase: (string: any) => {
                let getStr = ''
                if(string) getStr = string.replace(/\s/g,'_').toLowerCase()

                return getStr
            },
            secondsToDhms: (seconds: any) => {
                seconds = Number(seconds)
                var d = Math.floor(seconds / (3600*24))
                var h = Math.floor(seconds % (3600*24) / 3600)
                var m = Math.floor(seconds % 3600 / 60)
                var s = Math.floor(seconds % 60)
                
                var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : ""
                var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : ""
                var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : ""
                var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""
                return dDisplay + hDisplay + mDisplay + sDisplay
            },
            months: (num: any) => {
                var obj = {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                }

                return obj[num];
            },
            inWords: (num: any) => {
                // function for number to words
                var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen ']
                var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
                var n = null

                if ((num = num.toString()).length > 9) return 'overflow'
                n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
                if (!n) return; var str = ''
                str += (Number(n[1]) != 0) ? (a[Number(n[1])] || b[Number(n[1][0])] + ' ' + a[Number(n[1][1])]) + 'crore ' : ''
                str += (Number(n[2]) != 0) ? (a[Number(n[2])] || b[Number(n[2][0])] + ' ' + a[Number(n[2][1])]) + 'lakh ' : ''
                str += (Number(n[3]) != 0) ? (a[Number(n[3])] || b[Number(n[3][0])] + ' ' + a[Number(n[3][1])]) + 'thousand ' : ''
                str += (Number(n[4]) != 0) ? (a[Number(n[4])] || b[Number(n[4][0])] + ' ' + a[Number(n[4][1])]) + 'hundred ' : ''
                str += (Number(n[5]) != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[Number(n[5][0])] + ' ' + a[Number(n[5][1])]) : ''
                
                return str
            },
            toWords: (s: any) => {
                // American Numbering System
                var th = ['','thousand','million', 'billion','trillion'];
                // uncomment this line for English Number System
                // var th = ['','thousand','million', 'milliard','billion'];
                var dg = ['zero','one','two','three','four','five','six','seven','eight','nine']; 
                var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
                var tw = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
                s = s.toString();
                s = s.replace(/[\, ]/g,''); 
                if (s != parseFloat(s)) return 'not a number'; 
                var x = s.indexOf('.');
                if (x == -1) x = s.length;
                if (x > 15) return 'too big';
                var n = s.split('');
                var str = ''; 
                var sk = 0; 
                for (let i=0; i < x; i++) {
                    if ((x-i)%3==2) {
                        if (n[i] == '1') {
                            str += tn[Number(n[i+1])] + ' '; i++; sk=1;
                        }
                        else if (n[i]!=0) {
                            str += tw[n[i]-2] + ' ';sk=1;
                        }
                    } else if (n[i]!=0) {
                        str += dg[n[i]] +' '; 
                        if ((x-i)%3==0) str += 'hundred ';sk=1;
                    } 
                    if ((x-i)%3==1) {
                        if (sk) str += th[(x-i-1)/3] + ' ';sk=0;
                    }
                } 
                if (x != s.length) {
                    var y = s.length; 
                    str += 'point '; 
                    for (let i = x+1; i < y; i++) {
                        str += str.replace(/\s+/g,' ');
                    }
                }

                return str;
            },
            invalidNumber: (chr: any) => {
                var invalidChars = ["-","+","e","E"]
                var validChars = ['0','1','2','3','4','5','6','7','8','9','.']
                // console.log(validChars.includes(chr))
                if (invalidChars.includes(chr) || !validChars.includes(chr)) return true
                else return false
            },
            invalidChr: (reg_exp: string, chr: any) => {
                const re = new RegExp(`${reg_exp}`, 'g')
                // console.log(re)
                return re.test(chr) ? false : true
            },
            invalidText: (reg_exp: string, str: any) => {
                const re = new RegExp(`${reg_exp}`, 'g')
                // console.log(re)
                return re.test(str) ? false : true
            },
            zeroLTrim: (num: any) => {
                var numStr = num.toString()
                numStr = numStr.length > 1 ? numStr.replace(/^0+/, '') : numStr
                
                return numStr
            },
            numberSuffix: (i: any) => {
                var j = i % 10,
                    k = i % 100
                if (j == 1 && k != 11) {
                    return i + "st"
                }
                if (j == 2 && k != 12) {
                    return i + "nd"
                }
                if (j == 3 && k != 13) {
                    return i + "rd"
                }
                return i + "th"
            },
            fileSizeOrganize: (number: any) => {
                let getStr = ''
                if(number) {
                    if( (number / 1024) / 1024 > 1)
                    getStr = ((number / 1024) / 1024).toFixed(1) + ' M'
                    else if( (number / 1024) > 1)
                    getStr = (number / 1024).toFixed(1) + ' K'
                    else
                    getStr = number.toFixed(1) + ' B'
                }

                return getStr
            },
            checkAuthInputData: (auth_data: any, govt_emp_data: any, req_field: string) => {
                // console.log(auth_data)
                // console.log(govt_emp_data)
                let citizen_data = auth_data.CitizenInfo
                let getData = ''
                if(req_field=='first_name') getData = citizen_data.first_name
                else if(req_field=='last_name') getData = citizen_data.last_name
                else if(req_field=='middle_name') getData = citizen_data.middle_name
                else if(req_field=='full_name') getData = citizen_data.first_name + (citizen_data.middle_name?' ' + citizen_data.middle_name:'') + (citizen_data.last_name?' ' + citizen_data.last_name:'')
                else if(req_field=='suffix') getData = citizen_data.surfix
                else if(req_field=='email') getData = auth_data.email
                else if(req_field=='mobile') getData = auth_data.mobile
                else if(req_field=='father_name') getData = citizen_data.father_name
                else if(req_field=='mother_name') getData = citizen_data.mother_name
                else if(req_field=='spouse_name') getData = citizen_data.spouse_name
                else if(req_field=='dob') getData = citizen_data.dob
                else if(req_field=='gender') getData = citizen_data.gender
                else if(req_field=='nationality') getData = citizen_data.nationality_id
                else if(req_field=='occupation') getData = citizen_data.occupation
                else if(req_field=='religion') getData = citizen_data.religion_id
                else if(req_field=='cur_address') getData = citizen_data.cur_address
                else if(req_field=='per_address') getData = citizen_data.per_address
                else if(req_field=='signature') getData = citizen_data.signature
                else if(req_field=='office_name') getData = govt_emp_data && govt_emp_data.office?govt_emp_data.office.title:''
                else if(req_field=='designation') getData = govt_emp_data && govt_emp_data.designation?govt_emp_data.designation.title:''
                else if(req_field=='govt_issued_id') getData = citizen_data.govt_issue_id_number
                else if(req_field=='vulnerability') getData = citizen_data.vulnerability?citizen_data.vulnerability + (citizen_data.vulnerability_specify?` (${citizen_data.vulnerability_specify})`:``):''
                
                return getData
            },
            getFullName: (auth_data: any) => {
                let citizen_data = auth_data.CitizenInfo
                return citizen_data.first_name + (citizen_data.middle_name?' ' + citizen_data.middle_name:'') + (citizen_data.last_name?' ' + citizen_data.last_name:'')
            },
            getPreAddress: (auth_data: any) => {
                let citizen_data = auth_data.CitizenInfo
                return citizen_data.pre_address + (citizen_data.pre_barangay?',' + citizen_data.pre_barangay.barangay_name:'') + (citizen_data.pre_municipality?',' + citizen_data.pre_municipality.municipality_name:'') + (citizen_data.pre_provience?',' + citizen_data.pre_provience.provience_name:'') + (citizen_data.pre_region?',' + citizen_data.pre_region.region_name:'')
            },
            getPerAddress: (auth_data: any) => {
                let citizen_data = auth_data.CitizenInfo
                return citizen_data.per_address + (citizen_data.per_barangay?',' + citizen_data.per_barangay.barangay_name:'') + (citizen_data.per_municipality?',' + citizen_data.per_municipality.municipality_name:'') + (citizen_data.per_provience?',' + citizen_data.per_provience.provience_name:'') + (citizen_data.per_region?',' + citizen_data.per_region.region_name:'')
            },
            genderList: () => {
                // gender list
                let gender_list = {
                    1: 'Male',
                    2: 'Female',
                    3: 'Common',
                    4: 'Not Mentioned'
                }

                return gender_list
            },
            maritalList: () => {
                // marital status list
                let marital_status_list = {
                    1: 'Married',
                    2: 'Unmarried',
                    3: 'Divorced',
                    4: 'Widowed/Widower'
                }

                return marital_status_list
            },
            religionList: () => {                
                let religion_list = {
                    1: 'Islam',
                    2: 'Christianity',
                    3: 'Hinduism',
                    4: 'Buddhism',
                    5: 'Judaism',
                    6: 'Jainism',
                    7: 'Sikhism',
                    8: 'Zoroastrianism',
                    9: 'Humanism',
                    10: 'Baha\'i',                    
                    11: 'Agnosticism',
                    12: 'Atheism'
                }

                return religion_list
            },
            fileTypeList: () => {
                return {
                    1: {
                        name: 'JPEG',
                        type: 'image/jpeg'
                    },
                    2: {
                        name: 'PDF',
                        type: 'application/pdf'
                    },
                    3: {
                        name: 'JPG',
                        type: 'image/jpg'
                    },
                    4: {
                        name: 'PNG',
                        type: 'image/png'
                    }                    
                }
            },
            applicationStatusInfo: () => {
                return {
                    'completed': 1,
                    'in-progress': 2,
                    'rejected': 3,
                    're-submitted': 4,
                    'declined': 5,
                    'payment-request-1': 6,
                    'payment-received': 7,
                    'payment-request-2': 8,
                    'payment-success': 9,
                    'cancelled': 10,
                    'inspection': 11,
                    'document-request': 13,
                    'document-success': 14
                }
            },
            defaultFileAllowSize: () => {
                return 25 // MB
            },
            defaultNationalityId: () => {
                return 175 // default Fillipino, value = 175
            },
            defaultCountryId: () => {
                return 175 // default Phillipines, value = 175
            },
            assignPageSlug: (req_page: string) => {
                if(req_page=='signin') return 'signin'
                else if(req_page=='profile') return 'dashboard/profile'
                else if(req_page=='service') return 'service'
                else if(req_page=='contact-us') return 'contact-us'
                else if(req_page=='partners') return 'partners'
                else if(req_page=='digital-centers') return 'digital-centers'
                else if(req_page=='application-track') return 'application-track'
                else if(req_page=='tourist-attraction') return 'tourist-attraction'
                else if(req_page=='release-note') return 'release-note'
            },
            breadcrumbPageTitle: (req_page: string) => {
                if(req_page=='signin') return 'signin'
                else if(req_page=='profile') return 'profile'
                else if(req_page=='service') return 'Services'
                else if(req_page=='contact-us') return 'Contact Us'
                else if(req_page=='about-us') return 'About Us'
                else if(req_page=='partners') return 'Partners'
                else if(req_page=='digital-centers') return 'Digital Centers'
                else if(req_page=='tourist-attraction') return 'Tourist Attraction'
                else if(req_page=='release-note') return 'Release Note'
            },
            serviceRecipientType: (req_type: string) => {
                if(req_type=='government') return 2
                else return 1
            },
            getServiceUrl: (data: any) => {                
                if(data.slug[0]=='/') return `${data.slug}`
                return `/${nuxtApp.$assignPageSlug('service')}/${data.slug}`
            },
            getServiceFormApplyUrl: (data: any) => {
                // return `/${nuxtApp.$assignPageSlug('service')}/form-apply-${data.id}`
                return `/${nuxtApp.$assignPageSlug('service')}/form/${data.id}`
            },
            getTransLang: (short_code: string) => {
                const get_lang_translation = useState('get_lang_translation')
                // console.log(get_lang_translation.value)
                if (Array.isArray(get_lang_translation.value)) {
                    const translation = get_lang_translation.value.find((item: any) => item.slug === short_code)
                    // return translation ? translation.content : '';
                    // return translation ? translation.content : short_code;
                    return appMode == 'dev' ? (translation ? translation.content : short_code) : (translation ? translation.content : '');
                }
                return short_code;
            },
            formatDate: (date: any) => {
                const d = new Date(date)
                return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
            },
            formatDateTime: (date: any) => {
                const d = new Date(date)
                return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            },
            hoursToMilliseconds: (hours: any) => {
                return hours * 60 * 60 * 1000
            },
            minutesToMilliseconds: (minutes: any) => {
                return minutes * 60 * 1000
            }
        }
    }
})