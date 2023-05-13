module.exports = {
  name: 'Dimitri Gerin',
  title: 'Software and Application Engineer',
  facts: {
    'residence': '<a href="https://goo.gl/maps/H94JiPQpQ76JBTpq9"><i class="fa fa-home fact-icon"></i>2B Rue du 11 Novembre 1918, Palaiseau</a>',
    //'Wiki': `<a href="https://en.wikipedia.org/wiki/William_Shakespeare">
    //              <i class="fa-brands fa-wikipedia-w fact-icon"></i>William_Shakespeare
    //            </a>`,
    //'Twitter': `<a href="https://twitter.com/shakespeare"><i class="fa-brands fa-twitter fact-icon"></i>Shakespeare</a>`,
    'email': '<a href="dgerin@poton.me"><i class="fa fa-envelope fact-icon"></i>dgerin@poton.me</a>',
    'phone': '<i class="fas fa-phone fact-icon"></i>+33783835501</a>',
    'linkedin': '<a href="https://www.linkedin.com/in/dimitri-gerin-04026960"><i class="fab fa-linkedin fact-icon"></i>Dimitri Gerin</a>',
    'github pro (UPMEM)': '<a href="https://github.com/dgerinmem"><i class="fab fa-github fact-icon"></i>(UPMEM Pro github) dgerinmem</a>',
    'github perso (UPMEM)': '<a href="https://github.com/dgerin"><i class="fab fa-github fact-icon"></i>(Personal github) dgerin</a>'
  },
  skills: [
    ['parallel programming', 100],
    ['performance optimization', 90],
    ['Linux device driver', 60],
    ['Deep Learning', 50],
    ['RTL Design', 80],
    ['Quantization', 70],
  ],
  languages: [
    ['C', 100],
    ['C++', 100],
    ['Python', 100],
    ['VHDL', 100],
  ],
  systems: [
    ['PIM (Processing in Memory)', 100],
    ['Linux Kernel', 60],
    ['x86', 60],
    ['PCI express', 60],
    ['DDR memory', 100],
    ['Xilinx FPGAs', 100],
  ],
  frameworks: [
    ['PyTorch', 100],
    ['Tensorflow', 70],
    ['LLVM', 40],
  ],
  tools: [
    ['linux perf', 100],
    ['qemu', 70],
    ['intel vtune', 60],
    ['Docker', 60],
    ['vivado', 60],
  ],
  positions: [
    {
      title: 'UPMEM',
      location: 'Paris/Grenoble',
      position: 'Software and Application Engineer',
      period: '2021 - 2023',
      skills: ['PIM', 'Linux Device Driver', 'Parallel Programming', 'PCI express' ,'Performance Optimization', 'Deep Learning'],
      contents: 'One part of my job is to develop applications on UPMEM PIM devices to demonstrate the interest of PIM technology in term of performance and energy efficiency. I also work on the development, maintenance and support of the UPMEM PIM SDK, which is a set of tools and libraries to develop applications on UPMEM PIM devices. \
                I am also working on the improvement of the UPMEM PIM device driver, which is a Linux kernel module used to communicate with PIM devices.'
                ,
      project_section : 'Projects and applications',
      projects :[
          { name : 'HEDGES', ref :'https://github.com/upmem/usecase_hedges', content : 'PIM implementation of HEDGES (https://www.pnas.org/doi/full/10.1073/pnas.2004821117), error-correcting code for DNA storage.' },
          { name : 'genomic compression', content : 'Implementation of a a novel genomique technique of DNA compression, based on bloom filter, in collaboration with INRIA/IRISA.' },
          { name : 'SparseP', ref :'https://github.com/upmem/SparseP/tree/upmem_internal', content : 'Optimization of original SparseP implementation from ETH Zurich. SparseP is a PIM implementation of Sparse Matrix/Vector multiplication (https://arxiv.org/abs/2201.05072)' },
          { name : 'PIM Embedding', ref : 'https://github.com/upmem/PIM-Embedding-Lookup/tree/multicol' , content : 'PIM implementation of Pytorch EmbeddingBag Layer' },
      ],
    },
    {
      title: 'VSORA',
      location: 'Meudon-La-Forêt',
      position: 'Software Engineer',
      period: '2018 - 2021',
      skills: ['DeepLearning', 'C++', 'SystemC'],
      contents: 'I mainly focussed on the specification and the implementation of the VSORA Deep Learning Inference\
      library, a library that implements various DL Layers on VSORA DSP Architecture.\
      I also ported various Deep Learning models on VSORA DSP Architecture, and developed a Quantization Aware retraining flow to improve\
      model\'s precision with Low-Precision quantization.\
      One other part of my job was to maintain the release and CI pipeline.'
    },
    {
      title: 'THALES',
      location: 'Gennevilliers',
      position: 'FPGA Engineer',
      period: '2017 - 2018',
      skills: ['FPGA', 'Telecom', 'Signal Processing'],
      contents: `As a subcontractor, I participated in the development and validation of the physical layer of FO3D, a new military waveform developed by Thales.
       I focussed myself on the design of the FPGA part of the TX and RX chain. For this, I developed
       different RTL blocks that implement signal processing functions.`,
      project_section : 'Projects',
      projects :[
          { name : 'FO3D', content : 'FPGA Implementation of the physical layer of the FO3D waveform' },
      ],
    },
    {
      title: 'SIMPULSE',
      location: 'Palaiseau',
      position: 'FPGA / Embedded System Engineer',
      period: '2014 - 2017',
      skills: ['RTL Design', 'FPGA', 'Telecom','SoC', 'HW/SW Codesign'],
      contents: `I participated it the development of the FPGA platform. I developed different RTL blocks for
                 different purposes like telecom oriented signal processing functions, device interfaces and CPU co-processors.`,
      project_section : 'Noticable Projects',
      projects :[
          { name : 'European Project', content : 'In collaboration with Nokia Bell Labs, implementing an OpenAIR LTE If4p5 Interface, into FPGA, with Simpulse DSP IP' },
      ],
    },
    {
      title: 'CEA LETI',
      location: 'Grenoble',
      period: '2014',
      position: 'Intern',
      skills: ['Matlab', 'OFDM', '5G'],
      contents: `Research in MIMO algorithm for advanced (5G,LTE-Advance).`
    },
    {
      title: 'UNLV',
      location: 'Las Vegas',
      position: 'Intern',
      period: '2013',
      skills: ['C++'],
      contents: `Participating in the developpment of an interactive motion based traffic simulator.`
    }
  ],
  education :[
    {
      period: '2012 - 2014',
      header: 'PHELMA, Grenoble-INP (ex ENSERG)',
      location: 'Grenoble',
      skills: ['Signal Processing','Electrical Engineering','Computer Science'],
      contents: `Engineer's Degree in signal processing, electrical engineering and computer science`
    },
    {
      period: '2008 - 2010',
      header: 'CNAM',
      location: 'Paris',
      skills: ['Electrical Engineering'],
      contents: `Technology Degree (DUT GEII), Graduated as Valedictorian`
    },
    {
      period: '2005 - 2008',
      header: 'ETPLM',
      location: 'Grenoble',
      contents: `High school degree (BAC STI GE), with honors (mention très bien)`
    },
  ],
   certifications :[
    {
      period: '2021',
      header: 'Machine Learning',
      provider: 'Coursera/Standford, Andrew Ng',
      skills: ['Logistic Regression', 'Neural Networks', 'Recommenders'],
      contents: ``
    },
    {
      period: '2022',
      header: 'Solana Blockchain Developer Bootcamp with Rust + JavaScript',
      provider: 'Udemy',
      skills: ['SmartContract', 'Rust', 'Javascript', 'Solana'],
      contents: ``
    },
    {
      period: '2018',
      header: 'Xilinix FPGA Certification',
      provider: 'Xilinx Training Program',
      skills: ['FPGA', 'Vivado', 'VHDL'],
      contents: ``
    }
   ],
  experience: [
    {
      header: 'Performance',
      skills: ['theater', 'play'],
      contents: `
Thousands of performances of my plays have been staged since the end of the 16th century. Many of my greatest plays were performed by the Lord Chamberlain's Men and King's Men acting companies at the [Globe](https://en.wikipedia.org/wiki/Globe_Theatre) and Blackfriars Theatres.
`
    },
    {
      header: 'Poetry',
      skills: ['poetry', 'erotic'],
      contents: `
In 1593 and 1594, when the theatres were closed because of plague, I published two narrative poems on sexual themes, Venus and Adonis and The Rape of Lucrece. I dedicated them to Henry Wriothesley, Earl of Southampton.
`
    }
  ]
};
