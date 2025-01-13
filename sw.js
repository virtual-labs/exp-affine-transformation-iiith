importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"d65a22546834a8a833d89c3148fd753d","url":"assignment.html"},{"revision":"76be00228365917deed96fb1736d10af","url":"assignment/affine.html"},{"revision":"aaa4c0dc4a70bf5c5b6dc278d3312ce5","url":"assignment/assign.html"},{"revision":"ffe6912d71019473fe2b918a19482b9d","url":"assignment/css/carpe-slider.css"},{"revision":"12462a46037eb8ca5e3e4041576b5a08","url":"assignment/css/common.css"},{"revision":"5603ee1edb2ac07b5fe8f205d9d0802d","url":"assignment/css/dark-hive/images/ui-bg_flat_30_cccccc_40x100.png"},{"revision":"5a2bda961d4418fdb49491dffc2b1788","url":"assignment/css/dark-hive/images/ui-bg_flat_50_5c5c5c_40x100.png"},{"revision":"8ceb11fa1b6ad1926591713fc9a5b14b","url":"assignment/css/dark-hive/images/ui-bg_glass_40_ffc73d_1x400.png"},{"revision":"ccb955b48cf9e3488c0046e28ff3a8a9","url":"assignment/css/dark-hive/images/ui-bg_highlight-hard_20_0972a5_1x100.png"},{"revision":"27aa8995769cf411237de2211274e0ab","url":"assignment/css/dark-hive/images/ui-bg_highlight-soft_33_003147_1x100.png"},{"revision":"ba0345d8a7233d59bb1e0168462a1955","url":"assignment/css/dark-hive/images/ui-bg_highlight-soft_35_222222_1x100.png"},{"revision":"493a6813aa32a311d9ecacde7a1593d6","url":"assignment/css/dark-hive/images/ui-bg_highlight-soft_44_444444_1x100.png"},{"revision":"c101d1b38ed269e02de83d13feaf35e1","url":"assignment/css/dark-hive/images/ui-bg_highlight-soft_80_eeeeee_1x100.png"},{"revision":"44a97ff198906fb3727fcff537e55dd5","url":"assignment/css/dark-hive/images/ui-bg_loop_25_000000_21x21.png"},{"revision":"ebe6b6902a408fbf9cac6379a1477525","url":"assignment/css/dark-hive/images/ui-icons_222222_256x240.png"},{"revision":"942d7dfbe85b1c31d8477427c7799588","url":"assignment/css/dark-hive/images/ui-icons_4b8e0b_256x240.png"},{"revision":"7c9d12dcea77a020c245b9eb59f67b92","url":"assignment/css/dark-hive/images/ui-icons_a83300_256x240.png"},{"revision":"3f3acb42b0d2bfd5f39069b87803eebc","url":"assignment/css/dark-hive/images/ui-icons_cccccc_256x240.png"},{"revision":"342bc03f6264c75d3f1d7f99e34295b9","url":"assignment/css/dark-hive/images/ui-icons_ffffff_256x240.png"},{"revision":"95b67ae281541a3fb09f6411e1cf7482","url":"assignment/css/dark-hive/jquery-ui-1.8.4.custom.css"},{"revision":"ef00bba9bc2e2461ef2c882ff4a28776","url":"assignment/css/default.css"},{"revision":"8b9b6d3caaa128a669d28043b090eabc","url":"assignment/css/imgareaselect-default.css"},{"revision":"bfff2254a16aefc780b934e0da29d499","url":"assignment/css/jquery-slider.css"},{"revision":"9eb0f549f39e02e23d52f3f8da7d519b","url":"assignment/css/jquery-slider2.css"},{"revision":"b0245f6b99b5344ee05cc326a373e2de","url":"assignment/css/override.css"},{"revision":"5bd228a2f5dff626ca8d9c6dfa1e9449","url":"assignment/css/psd2css.css"},{"revision":"c8b1fcb5ff4cac4ec5db272380ef958b","url":"assignment/css/style.css"},{"revision":"fde692723256641854a6087f6c661c28","url":"assignment/images/assess/affine1_1_result.png"},{"revision":"836f6e33bf3fdd21ed24e5c6c55454d9","url":"assignment/images/assess/affine1_1.png"},{"revision":"ce2b3a0bdbbf8a43dc33dbfbb8ab9ebf","url":"assignment/images/background.jpg"},{"revision":"560b3d4258ca464568c1a8676649f373","url":"assignment/images/background.png"},{"revision":"c947daea7612ceb5fc1ab031a3fdd8dc","url":"assignment/images/bck_head.jpg"},{"revision":"683357a768689d921b664c98494001ca","url":"assignment/images/bck.jpg"},{"revision":"61ec252f45bc5ccb4897704c0fd04be0","url":"assignment/images/bck.png"},{"revision":"9f8d713108662e889fa6a02ff794d83f","url":"assignment/images/blank.png"},{"revision":"a28f24fc2629faa387f02b0cd0954225","url":"assignment/images/close.png"},{"revision":"3e461cd17011cf5fe414543ff31f141d","url":"assignment/images/course_aligned.png"},{"revision":"9c0e4f4f3353213004dadf583bebc750","url":"assignment/images/favicon.png"},{"revision":"169c38fa2527a77ece25b2281be2836b","url":"assignment/images/goal.png"},{"revision":"2142f154a2d78043ff38a91d02d163b4","url":"assignment/images/histo.jpg"},{"revision":"865da41a2827958dd92f347c269ba66e","url":"assignment/images/iiit.png"},{"revision":"5297df40251f838d66bcd3b4a06c59b0","url":"assignment/images/image001.jpg"},{"revision":"0df056d44958162d3bdd7115642520e3","url":"assignment/images/image003.jpg"},{"revision":"72d489b894186f02074ad6bb75661154","url":"assignment/images/introduction.jpg"},{"revision":"9b5521a63450aa88d4271c59a4423e34","url":"assignment/images/Layer-1.jpg"},{"revision":"05becb3c7c45f20c44f12bec60e994c1","url":"assignment/images/Layer-2.jpg"},{"revision":"3ded0b3ff4cdd322041f7c568ebb3135","url":"assignment/images/Layer-3.jpg"},{"revision":"93bf0ec2290fa266b27cf6195c6a7bad","url":"assignment/images/Layer-4.jpg"},{"revision":"93bf0ec2290fa266b27cf6195c6a7bad","url":"assignment/images/Layer-5.jpg"},{"revision":"05676bed915a874fe445fc9fa2c2548d","url":"assignment/images/Layer-6.png"},{"revision":"749814813b6926521c3205cebfa82b2c","url":"assignment/images/Layer-7.jpg"},{"revision":"536d211edf634bf15187ea259dc2de49","url":"assignment/images/Layer-8.jpg"},{"revision":"ae551cd241ada17590d7759ea183fda7","url":"assignment/images/logo.jpg"},{"revision":"813649156de599f2d6a5c83cf0e05446","url":"assignment/images/M1.jpg"},{"revision":"a6898b72c43bd9771f6e3cc06659b998","url":"assignment/images/manual.jpg"},{"revision":"068da388873709399dc61a61eb76ee53","url":"assignment/images/Mosaic_diff.png"},{"revision":"813649156de599f2d6a5c83cf0e05446","url":"assignment/images/Mosaic.jpg"},{"revision":"f59b96ffa0ee298828d43b079d8e0e19","url":"assignment/images/Mosaic.png"},{"revision":"dff7070b797a62efde1f418c0c58799a","url":"assignment/images/Mosaiccol_b.jpg"},{"revision":"9cbd1e86996055b2629433720c6bf8f8","url":"assignment/images/Mosaiccol.jpg"},{"revision":"12c7da21da590b212a049f93084751ed","url":"assignment/images/Mosaiccol2.png"},{"revision":"e96d0f5f804debb373a24910d3cee087","url":"assignment/images/Mosaicdiff.png"},{"revision":"f59b96ffa0ee298828d43b079d8e0e19","url":"assignment/images/Mosaichisto.png"},{"revision":"4e82269a301599a7f8251fbcb1efa08d","url":"assignment/images/MosaichistoOLD.png"},{"revision":"5cf7f6c3209a7748425bec7b7fd76813","url":"assignment/images/Mosaicmorph.png"},{"revision":"8d5df8c5c92389c64845b1eedd7a1581","url":"assignment/images/Mosaicsegment.png"},{"revision":"a1e8f5fb24744cf125d338666d37c9dd","url":"assignment/images/objective.jpg"},{"revision":"41bc711b8ca93238a80ffda83d81ff0d","url":"assignment/images/procedure.jpg"},{"revision":"9b40ab3d50e60500284397d9158f8752","url":"assignment/images/quizzes.jpg"},{"revision":"8ea18c9edf61d8c7b58fc3ddae9d5677","url":"assignment/images/readings.jpg"},{"revision":"d8d7a7d7306cf8110ba2d95d58876a9f","url":"assignment/images/RGB_Mosaic.jpg"},{"revision":"3ac8b2218c012e5bd155c3f86d05019d","url":"assignment/images/simulation.jpg"},{"revision":"bf5e99c31b4465ac634895176e89a69b","url":"assignment/images/Sitemap.png"},{"revision":"a6898b72c43bd9771f6e3cc06659b998","url":"assignment/images/theory.jpg"},{"revision":"0d399398c29eb4045bf003a90c228aef","url":"assignment/index.html"},{"revision":"30de0466f7efec4f25360424b9d44c8c","url":"assignment/js/carpe-slider.js"},{"revision":"10092eee563dec2dca82b77d2cf5a1ae","url":"assignment/js/jquery-1.4.2.min.js"},{"revision":"10092eee563dec2dca82b77d2cf5a1ae","url":"assignment/js/jquery-1.js"},{"revision":"9a85780a9d3c291a518e6f13a74273ac","url":"assignment/js/jquery-ui-1.8.4.custom.min.js"},{"revision":"e9cda6fc6b7525a853524cfdaac2b443","url":"assignment/js/jquery.flot.js"},{"revision":"b606d2cff96718ef1c6c42d20782f36b","url":"assignment/js/jquery.imgareaselect.js"},{"revision":"22175d95b973a74d3bcab1f3fbb6e2c2","url":"assignment/js/modernizr-1.5.min.js"},{"revision":"87ef663a2812da365082a9baeef850e7","url":"assignment/js/pageload.js"},{"revision":"ac09317e4faa4c422758c88e21cf5dc1","url":"assignment/js/psd2css.js"},{"revision":"a3b75f75da6ac3a8b8bc7878a0cd384a","url":"feedback.html"},{"revision":"6704cd30f83bfd48891e0dacf8f90177","url":"images/image012.jpg"},{"revision":"1408c5b828b93041e90c48a59597802c","url":"images/image012.png"},{"revision":"84d875f459ccdc53f2d43207d41fae6c","url":"images/image013.jpg"},{"revision":"2509cd45188c2ad21807c23808c11835","url":"images/image013.png"},{"revision":"7eee6eeddd8344cbe7b747a5b15124bb","url":"images/image014.jpg"},{"revision":"3b0fb404668e042f0e4ed3e35ea6f283","url":"images/image014.png"},{"revision":"256c19593cb04bed94c888ba017f0348","url":"images/image015.jpg"},{"revision":"da67326eb0994e2918a247b5d784d038","url":"images/image015.png"},{"revision":"03cea232dd1b74560a1a8fe55bc7f14d","url":"images/image016.jpg"},{"revision":"c0d5730f56dc29ca1ac1fe697d4eb40c","url":"images/image016.png"},{"revision":"0a130664924e8920abcecc3684dfb7d6","url":"images/image017.jpg"},{"revision":"7cfe988d843672b22a1a5ca4935197ad","url":"images/image017.png"},{"revision":"ebd222ebf4153a67706022cdaab73708","url":"images/image018.jpg"},{"revision":"8460a8c8748249677305260cc5b2df7e","url":"images/image018.png"},{"revision":"7c2c89ccf7be2396aa59c24da57e9399","url":"images/image019.jpg"},{"revision":"391124abbb7fc410607bf56c2ce781d5","url":"images/image019.png"},{"revision":"3f6d0f20634f34530bbb39446574829e","url":"images/image020.jpg"},{"revision":"62989222b35beb4f0aa041ee5cb8c27e","url":"images/image020.png"},{"revision":"e5f8ef8f5742e7f76bea3851758a00be","url":"images/image021.jpg"},{"revision":"4081e3c62478329d45b71323d332d6b3","url":"images/image021.png"},{"revision":"4dd0e67b9048cdc8fef0d0455f69b74d","url":"images/image022.jpg"},{"revision":"47e7cd778a6b7535f12850697704ed9f","url":"images/image022.png"},{"revision":"0a800c5ec89f3060d15ce18b621acbea","url":"images/image023.jpg"},{"revision":"b466aab656d443c3a916f4e0c8146260","url":"images/image023.png"},{"revision":"d1aebdedb8f6a3eef1ce75b02f3f8a8d","url":"images/image024.jpg"},{"revision":"1c65e627253df90d3f3f7f12d12c766c","url":"images/image025.jpg"},{"revision":"17dba8f95ff14c75b0a0a4618c18b442","url":"images/image025.png"},{"revision":"131cc58480f0a2b632a0a480ca02dbf4","url":"images/table.png"},{"revision":"1ad319db9b622b149bcbc7c547734cf8","url":"images/table1.png"},{"revision":"07468820a89c9077bfdf618261a44e8c","url":"index.html"},{"revision":"8b75f3a6fb7a44f3f9951e60b000917f","url":"objective.html"},{"revision":"48a83949ce400335b079bd70519a2998","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"611702b04f980d5380fdb8feb103484c","url":"posttest.html"},{"revision":"9cff97aa5e24529c3514c4ebea36c97e","url":"posttest.json"},{"revision":"ee25c7f2b12eac680294bfe4db5968ac","url":"pretest.html"},{"revision":"c3f03b181b3740c719a56854bc131cb3","url":"pretest.json"},{"revision":"3ea6694b443ba1bef47b5f3eeb621ac6","url":"procedure.html"},{"revision":"e858f87eb42d8876131b1a57832be61d","url":"references.html"},{"revision":"5187553d45317f2dcef6bcf36fc4f9d8","url":"simulation.html"},{"revision":"edc7a6f53bfb55d70ca51c4d17a18cc5","url":"simulation/affine.html"},{"revision":"0a8a5f19ab32af0a5792ec25e09877fa","url":"simulation/assign.html"},{"revision":"ffe6912d71019473fe2b918a19482b9d","url":"simulation/css/carpe-slider.css"},{"revision":"12462a46037eb8ca5e3e4041576b5a08","url":"simulation/css/common.css"},{"revision":"5603ee1edb2ac07b5fe8f205d9d0802d","url":"simulation/css/dark-hive/images/ui-bg_flat_30_cccccc_40x100.png"},{"revision":"5a2bda961d4418fdb49491dffc2b1788","url":"simulation/css/dark-hive/images/ui-bg_flat_50_5c5c5c_40x100.png"},{"revision":"8ceb11fa1b6ad1926591713fc9a5b14b","url":"simulation/css/dark-hive/images/ui-bg_glass_40_ffc73d_1x400.png"},{"revision":"ccb955b48cf9e3488c0046e28ff3a8a9","url":"simulation/css/dark-hive/images/ui-bg_highlight-hard_20_0972a5_1x100.png"},{"revision":"27aa8995769cf411237de2211274e0ab","url":"simulation/css/dark-hive/images/ui-bg_highlight-soft_33_003147_1x100.png"},{"revision":"ba0345d8a7233d59bb1e0168462a1955","url":"simulation/css/dark-hive/images/ui-bg_highlight-soft_35_222222_1x100.png"},{"revision":"493a6813aa32a311d9ecacde7a1593d6","url":"simulation/css/dark-hive/images/ui-bg_highlight-soft_44_444444_1x100.png"},{"revision":"c101d1b38ed269e02de83d13feaf35e1","url":"simulation/css/dark-hive/images/ui-bg_highlight-soft_80_eeeeee_1x100.png"},{"revision":"44a97ff198906fb3727fcff537e55dd5","url":"simulation/css/dark-hive/images/ui-bg_loop_25_000000_21x21.png"},{"revision":"ebe6b6902a408fbf9cac6379a1477525","url":"simulation/css/dark-hive/images/ui-icons_222222_256x240.png"},{"revision":"942d7dfbe85b1c31d8477427c7799588","url":"simulation/css/dark-hive/images/ui-icons_4b8e0b_256x240.png"},{"revision":"7c9d12dcea77a020c245b9eb59f67b92","url":"simulation/css/dark-hive/images/ui-icons_a83300_256x240.png"},{"revision":"3f3acb42b0d2bfd5f39069b87803eebc","url":"simulation/css/dark-hive/images/ui-icons_cccccc_256x240.png"},{"revision":"342bc03f6264c75d3f1d7f99e34295b9","url":"simulation/css/dark-hive/images/ui-icons_ffffff_256x240.png"},{"revision":"95b67ae281541a3fb09f6411e1cf7482","url":"simulation/css/dark-hive/jquery-ui-1.8.4.custom.css"},{"revision":"ef00bba9bc2e2461ef2c882ff4a28776","url":"simulation/css/default.css"},{"revision":"8b9b6d3caaa128a669d28043b090eabc","url":"simulation/css/imgareaselect-default.css"},{"revision":"bfff2254a16aefc780b934e0da29d499","url":"simulation/css/jquery-slider.css"},{"revision":"9eb0f549f39e02e23d52f3f8da7d519b","url":"simulation/css/jquery-slider2.css"},{"revision":"b0245f6b99b5344ee05cc326a373e2de","url":"simulation/css/override.css"},{"revision":"5bd228a2f5dff626ca8d9c6dfa1e9449","url":"simulation/css/psd2css.css"},{"revision":"c8b1fcb5ff4cac4ec5db272380ef958b","url":"simulation/css/style.css"},{"revision":"fde692723256641854a6087f6c661c28","url":"simulation/images/assess/affine1_1_result.png"},{"revision":"836f6e33bf3fdd21ed24e5c6c55454d9","url":"simulation/images/assess/affine1_1.png"},{"revision":"ce2b3a0bdbbf8a43dc33dbfbb8ab9ebf","url":"simulation/images/background.jpg"},{"revision":"560b3d4258ca464568c1a8676649f373","url":"simulation/images/background.png"},{"revision":"c947daea7612ceb5fc1ab031a3fdd8dc","url":"simulation/images/bck_head.jpg"},{"revision":"683357a768689d921b664c98494001ca","url":"simulation/images/bck.jpg"},{"revision":"61ec252f45bc5ccb4897704c0fd04be0","url":"simulation/images/bck.png"},{"revision":"9f8d713108662e889fa6a02ff794d83f","url":"simulation/images/blank.png"},{"revision":"a28f24fc2629faa387f02b0cd0954225","url":"simulation/images/close.png"},{"revision":"3e461cd17011cf5fe414543ff31f141d","url":"simulation/images/course_aligned.png"},{"revision":"9c0e4f4f3353213004dadf583bebc750","url":"simulation/images/favicon.png"},{"revision":"169c38fa2527a77ece25b2281be2836b","url":"simulation/images/goal.png"},{"revision":"2142f154a2d78043ff38a91d02d163b4","url":"simulation/images/histo.jpg"},{"revision":"865da41a2827958dd92f347c269ba66e","url":"simulation/images/iiit.png"},{"revision":"5297df40251f838d66bcd3b4a06c59b0","url":"simulation/images/image001.jpg"},{"revision":"0df056d44958162d3bdd7115642520e3","url":"simulation/images/image003.jpg"},{"revision":"72d489b894186f02074ad6bb75661154","url":"simulation/images/introduction.jpg"},{"revision":"9b5521a63450aa88d4271c59a4423e34","url":"simulation/images/Layer-1.jpg"},{"revision":"05becb3c7c45f20c44f12bec60e994c1","url":"simulation/images/Layer-2.jpg"},{"revision":"3ded0b3ff4cdd322041f7c568ebb3135","url":"simulation/images/Layer-3.jpg"},{"revision":"93bf0ec2290fa266b27cf6195c6a7bad","url":"simulation/images/Layer-4.jpg"},{"revision":"93bf0ec2290fa266b27cf6195c6a7bad","url":"simulation/images/Layer-5.jpg"},{"revision":"05676bed915a874fe445fc9fa2c2548d","url":"simulation/images/Layer-6.png"},{"revision":"749814813b6926521c3205cebfa82b2c","url":"simulation/images/Layer-7.jpg"},{"revision":"536d211edf634bf15187ea259dc2de49","url":"simulation/images/Layer-8.jpg"},{"revision":"ae551cd241ada17590d7759ea183fda7","url":"simulation/images/logo.jpg"},{"revision":"813649156de599f2d6a5c83cf0e05446","url":"simulation/images/M1.jpg"},{"revision":"a6898b72c43bd9771f6e3cc06659b998","url":"simulation/images/manual.jpg"},{"revision":"068da388873709399dc61a61eb76ee53","url":"simulation/images/Mosaic_diff.png"},{"revision":"813649156de599f2d6a5c83cf0e05446","url":"simulation/images/Mosaic.jpg"},{"revision":"f59b96ffa0ee298828d43b079d8e0e19","url":"simulation/images/Mosaic.png"},{"revision":"dff7070b797a62efde1f418c0c58799a","url":"simulation/images/Mosaiccol_b.jpg"},{"revision":"9cbd1e86996055b2629433720c6bf8f8","url":"simulation/images/Mosaiccol.jpg"},{"revision":"12c7da21da590b212a049f93084751ed","url":"simulation/images/Mosaiccol2.png"},{"revision":"e96d0f5f804debb373a24910d3cee087","url":"simulation/images/Mosaicdiff.png"},{"revision":"f59b96ffa0ee298828d43b079d8e0e19","url":"simulation/images/Mosaichisto.png"},{"revision":"4e82269a301599a7f8251fbcb1efa08d","url":"simulation/images/MosaichistoOLD.png"},{"revision":"5cf7f6c3209a7748425bec7b7fd76813","url":"simulation/images/Mosaicmorph.png"},{"revision":"8d5df8c5c92389c64845b1eedd7a1581","url":"simulation/images/Mosaicsegment.png"},{"revision":"a1e8f5fb24744cf125d338666d37c9dd","url":"simulation/images/objective.jpg"},{"revision":"41bc711b8ca93238a80ffda83d81ff0d","url":"simulation/images/procedure.jpg"},{"revision":"9b40ab3d50e60500284397d9158f8752","url":"simulation/images/quizzes.jpg"},{"revision":"8ea18c9edf61d8c7b58fc3ddae9d5677","url":"simulation/images/readings.jpg"},{"revision":"d8d7a7d7306cf8110ba2d95d58876a9f","url":"simulation/images/RGB_Mosaic.jpg"},{"revision":"3ac8b2218c012e5bd155c3f86d05019d","url":"simulation/images/simulation.jpg"},{"revision":"bf5e99c31b4465ac634895176e89a69b","url":"simulation/images/Sitemap.png"},{"revision":"a6898b72c43bd9771f6e3cc06659b998","url":"simulation/images/theory.jpg"},{"revision":"b1b87606d4c0fde4a24efe3c13d6ebf6","url":"simulation/index.html"},{"revision":"30de0466f7efec4f25360424b9d44c8c","url":"simulation/js/carpe-slider.js"},{"revision":"10092eee563dec2dca82b77d2cf5a1ae","url":"simulation/js/jquery-1.4.2.min.js"},{"revision":"10092eee563dec2dca82b77d2cf5a1ae","url":"simulation/js/jquery-1.js"},{"revision":"9a85780a9d3c291a518e6f13a74273ac","url":"simulation/js/jquery-ui-1.8.4.custom.min.js"},{"revision":"e9cda6fc6b7525a853524cfdaac2b443","url":"simulation/js/jquery.flot.js"},{"revision":"b606d2cff96718ef1c6c42d20782f36b","url":"simulation/js/jquery.imgareaselect.js"},{"revision":"22175d95b973a74d3bcab1f3fbb6e2c2","url":"simulation/js/modernizr-1.5.min.js"},{"revision":"87ef663a2812da365082a9baeef850e7","url":"simulation/js/pageload.js"},{"revision":"ac09317e4faa4c422758c88e21cf5dc1","url":"simulation/js/psd2css.js"},{"revision":"e67068473b9b014d518176a946edc056","url":"theory.html"},{"revision":"88a14d596e60802107f2977b5c732a13","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );