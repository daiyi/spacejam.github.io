(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a, T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='bincode/struct.RefBox.html' title='bincode::RefBox'>RefBox</a>&lt;'a, T&gt;","impl&lt;'a&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='bincode/struct.StrBox.html' title='bincode::StrBox'>StrBox</a>&lt;'a&gt;","impl&lt;'a, T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='bincode/struct.SliceBox.html' title='bincode::SliceBox'>SliceBox</a>&lt;'a, T&gt;",];implementors["crdts"] = ["impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a>, A: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crdts/lwwreg/struct.LWWReg.html' title='crdts::lwwreg::LWWReg'>LWWReg</a>&lt;T, A&gt;","impl&lt;A: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crdts/vclock/struct.VClock.html' title='crdts::vclock::VClock'>VClock</a>&lt;A&gt;","impl&lt;Member: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>, Actor: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crdts/orswot/struct.Orswot.html' title='crdts::orswot::Orswot'>Orswot</a>&lt;Member, Actor&gt;","impl&lt;A: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crdts/gcounter/struct.GCounter.html' title='crdts::gcounter::GCounter'>GCounter</a>&lt;A&gt;","impl&lt;A: <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> + <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Encodable.html' title='rustc_serialize::serialize::Encodable'>Encodable</a> for <a class='struct' href='crdts/pncounter/struct.PNCounter.html' title='crdts::pncounter::PNCounter'>PNCounter</a>&lt;A&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
