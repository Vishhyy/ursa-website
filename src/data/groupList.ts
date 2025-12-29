export type GroupContact = {
    category: string;
    name: string;
    instagram?: string;
    email?: string;
    contactMethod?: string; 
    keyPerson?: string;     
    image?: string;
};

export const groupList: GroupContact[] = [
    // --- ADMINISTRATION ---
    {
        category: "Administration",
        name: "Saskatchewan Students (Govt)",
        instagram: "skstudents",
        keyPerson: "Provincial Portal",
        contactMethod: "Mon-Fri 8am-5pm"
    },
    {
        category: "Administration",
        name: "University of Regina (Official)",
        instagram: "uofreginaofficial",
        keyPerson: "Communications Office",
        contactMethod: "Find specific dept."
    },

    // --- FACULTY & DEPARTMENTAL ---
    {
        category: "Faculty & Dept",
        name: "Department of Computer Science",
        email: "cs.dept@uregina.ca",
        keyPerson: "Department Head"
    },
    {
        category: "Faculty & Dept",
        name: "Department of Music",
        instagram: "uofr_music_department",
        email: "music@uregina.ca",
        keyPerson: "Department Head"
    },
    {
        category: "Faculty & Dept",
        name: "Department of Physics",
        instagram: "uofrphysics",
        email: "physics.head@uregina.ca",
        keyPerson: "Department Head"
    },
    {
        category: "Faculty & Dept",
        name: "Faculty of Arts",
        instagram: "uofrarts",
        email: "arts.deans.office@uregina.ca",
        keyPerson: "Dean's Office"
    },
    {
        category: "Faculty & Dept",
        name: "Faculty of Science",
        instagram: "uofrscience",
        email: "sci.serv@uregina.ca",
        keyPerson: "Faculty Office"
    },
    {
        category: "Faculty & Dept",
        name: "U of R Arts Student Services",
        instagram: "uofr_asso",
        email: "arts.student.services@uregina.ca",
        keyPerson: "Academic Advisors"
    },
    {
        category: "Faculty & Dept",
        name: "UofR Creative Writing",
        instagram: "uofrcw",
        contactMethod: "Part of English Dept",
        keyPerson: "Coordinator"
    },
    {
        category: "Faculty & Dept",
        name: "UofR Engineering",
        instagram: "uofrengineering",
        email: "eng.general@uregina.ca",
        keyPerson: "Faculty Office"
    },
    {
        category: "Faculty & Dept",
        name: "University of Regina Theatre Dept.",
        instagram: "uofrtheatre",
        email: "theatre@uregina.ca",
        keyPerson: "Department Head"
    },
    {
        category: "Faculty & Dept",
        name: "UReginaFilm Department",
        instagram: "reginafilm",
        contactMethod: "Check Website for Dept Contact",
        keyPerson: "Department Head"
    },

    // --- FEDERATED COLLEGES ---
    {
        category: "Federated College",
        name: "Campion College",
        instagram: "campioncollegeofficial",
        email: "campion.college@uregina.ca",
        keyPerson: "Registrar's Office"
    },
    {
        category: "Federated College",
        name: "Campion Students' Union (CSU)",
        instagram: "campionstudentsunion",
        email: "president.csu@uregina.ca",
        keyPerson: "President"
    },
    {
        category: "Federated College",
        name: "La Cité (Francophone Centre)",
        instagram: "lacitesk",
        email: "lacite@uregina.ca",
        keyPerson: "Director"
    },
    {
        category: "Federated College",
        name: "Luther College",
        instagram: "lutheredu",
        email: "luther.registrar@uregina.ca",
        keyPerson: "Registrar's Office"
    },
    {
        category: "Federated College",
        name: "Luther Students' Union (LUSA)",
        instagram: "lutherstudents",
        contactMethod: "Check Linktree / DM",
        keyPerson: "President"
    },

    // --- ACADEMIC & PROFESSIONAL SOCIETIES ---
    {
        category: "Academic Society",
        name: "Arts Students' Association (ASA)",
        instagram: "uregina.asa",
        contactMethod: "DM on Instagram",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Biochemistry & Chemistry (BCSA)",
        instagram: "uofrbcsa",
        contactMethod: "Check Linktree / DM",
        keyPerson: "Executive Team"
    },
    {
        category: "Academic Society",
        name: "Business Students' Society (BSS)",
        instagram: "hillbss",
        email: "bss@uregina.ca",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Computer Science Students' Society (CSSS)",
        instagram: "csss.uofr",
        email: "csss.uofr@gmail.com",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Education Students' Society (ESS)",
        instagram: "ureginaess",
        contactMethod: "Check Linktree / DM",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Hill JDC West",
        instagram: "hilljdcwest",
        contactMethod: "Check Website",
        keyPerson: "Team Captains"
    },
    {
        category: "Academic Society",
        name: "Imprint Marketing Conference",
        instagram: "imprint_at_uofr",
        contactMethod: "Check Linktree / DM",
        keyPerson: "Conference Team"
    },
    {
        category: "Academic Society",
        name: "Physics Students Society",
        instagram: "pssuofr",
        contactMethod: "DM on Instagram",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Psychology Students' Association",
        instagram: "ureginapsa",
        contactMethod: "Check Linktree / DM",
        keyPerson: "Executive Team"
    },
    {
        category: "Academic Society",
        name: "Regina Engineering Students' Society (RESS)",
        instagram: "reginaengg",
        email: "contact@ress.ca",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Regina MASS (Actuarial)",
        instagram: "mass.uregina",
        email: "mass.uregina.ca",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "Regina SWSS (Social Work)",
        instagram: "reginaswss",
        contactMethod: "DM on Instagram",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "University of Regina Nursing Students (URNSS)",
        instagram: "urnss.official",
        contactMethod: "Check Linktree / DM",
        keyPerson: "President"
    },
    {
        category: "Academic Society",
        name: "UofR Pre-Med Club",
        instagram: "uofrpremedclub",
        contactMethod: "Check Linktree / DM",
        keyPerson: "Executive Team"
    },
    {
        category: "Academic Society",
        name: "UR POLIS (Political Science)",
        instagram: "ur.polis",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },

    // --- CAMPUS SERVICES & RESOURCES ---
    {
        category: "Campus Service",
        name: "Career Education",
        email: "career.education@uregina.ca",
        keyPerson: "Career Advisors"
    },
    {
        category: "Campus Service",
        name: "Dr. John Archer Library",
        instagram: "archerlibrary",
        email: "ask.archer@uregina.ca",
        keyPerson: "Librarian"
    },
    {
        category: "Campus Service",
        name: "RPIRG (Public Interest Research)",
        instagram: "rpirg",
        email: "info@rpirg.org",
        keyPerson: "Executive Director"
    },
    {
        category: "Campus Service",
        name: "SEARCH Health Clinic",
        instagram: "searchregina",
        contactMethod: "Check Website",
        keyPerson: "Executive Director"
    },
    {
        category: "Campus Service",
        name: "ta-tawâw Student Centre",
        instagram: "tatawawstudentcentre",
        email: "tatawaw.student.centre@uregina.ca",
        keyPerson: "Coordinator"
    },
    {
        category: "Campus Service",
        name: "The Women's Centre",
        instagram: "urwomenscentre",
        email: "wc@ursu.ca",
        keyPerson: "Coordinator"
    },
    {
        category: "Campus Service",
        name: "U of R Conservatory",
        instagram: "uofrconservatory",
        email: "cce.conservatory@uregina.ca",
        keyPerson: "Program Coordinator"
    },
    {
        category: "Campus Service",
        name: "U of R Continuing Education (CCE)",
        instagram: "uofrcce",
        email: "cce@uregina.ca",
        keyPerson: "Program Coordinator"
    },
    {
        category: "Campus Service",
        name: "UofR Campus Store",
        instagram: "uofrcampusstore",
        email: "uofr.bookstore@uregina.ca",
        keyPerson: "Manager"
    },
    {
        category: "Campus Service",
        name: "UofR Parking Services",
        instagram: "uofrparking",
        email: "uparking@uregina.ca",
        keyPerson: "Main Office"
    },
    {
        category: "Campus Service",
        name: "UofR Sexual Violence Prevention & Response Office",
        instagram: "ursexualviolenceresponse",
        email: "svpr@uregina.ca",
        keyPerson: "Coordinator",
        contactMethod: "Support/Advocacy"
    },
    {
        category: "Campus Service",
        name: "URI Study Abroad",
        instagram: "ur.studyabroad",
        email: "study.abroad@uregina.ca",
        keyPerson: "Advisors"
    },
    {
        category: "Campus Service",
        name: "UR Pride Centre",
        instagram: "urpridecentre",
        email: "contact@urpride.ca",
        keyPerson: "Executive Director"
    },

    // --- CLUBS ---
    {
        category: "Club",
        name: "Champions Of Change Club",
        instagram: "uofrchampionsofchange",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "Redeemed Christian Fellowship",
        instagram: "rcf_uregina",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "U of R African Club",
        instagram: "urafricanclub",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "U of R Choir",
        instagram: "urchoirs",
        contactMethod: "Part of Music Dept",
        keyPerson: "Choir Director"
    },
    {
        category: "Club",
        name: "U of R Community Service Club",
        instagram: "urcsc",
        email: "uofrcsc@gmail.com",
        keyPerson: "President"
    },
    {
        category: "Club",
        name: "University of Regina Amnesty",
        instagram: "uramnesty",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "University of Regina Improv",
        instagram: "urimprov2",
        contactMethod: "Join Discord / DM",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "UofR TSA (Theatre Students)",
        instagram: "urtheatrestudents",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "UR Filipino Students' Assoc.",
        instagram: "uofrfsa",
        contactMethod: "DM on Instagram",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "UR Toastmasters",
        instagram: "ur.toast",
        contactMethod: "DM on Instagram",
        keyPerson: "Club President"
    },
    {
        category: "Club",
        name: "URKSA (Korean Students)",
        instagram: "uofrksa",
        contactMethod: "Check Linktree / DM",
        keyPerson: "Executive Team"
    },
    {
        category: "Club",
        name: "URQI (Queer Initiatives)",
        instagram: "urqi4all",
        contactMethod: "Check Linktree / DM",
        keyPerson: "Executive Team"
    },

    // --- ATHLETICS ---
    {
        category: "Athletics",
        name: "U of R Cougar Women's Hockey",
        instagram: "urwomenshockey",
        contactMethod: "Contact via main athletics",
        keyPerson: "Coach"
    },
    {
        category: "Athletics",
        name: "U of R Cougars (Main)",
        instagram: "reginacougars",
        contactMethod: "Contact specific team",
        keyPerson: "Athletic Director"
    },
    {
        category: "Athletics",
        name: "UofR Women's Rugby",
        instagram: "cougarswrugby",
        contactMethod: "Contact via main athletics",
        keyPerson: "Coach"
    },
    {
        category: "Athletics",
        name: "University of Regina Rams",
        instagram: "reginarams",
        contactMethod: "Contact via main athletics",
        keyPerson: "Manager"
    },
    
    // --- SERVICE LEARNING & YOUTH ---
    {
        category: "Service & Advocacy",
        name: "CESL (Service Learning)",
        instagram: "uofrcesl",
        email: "experiential.learning@uregina.ca",
        keyPerson: "Coordinator"
    },
    {
        category: "Service & Advocacy",
        name: "EYES Youth Outreach",
        instagram: "eyesyouth",
        email: "eyes@uregina.ca",
        keyPerson: "Program Coordinator"
    },
];