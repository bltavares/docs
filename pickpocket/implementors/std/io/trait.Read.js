(function() {var implementors = {};
implementors["antidote"] = [];
implementors["bincode"] = ["impl&lt;'storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">IoRead</a> for <a class=\"struct\" href=\"bincode/read_types/struct.SliceReader.html\" title=\"struct bincode::read_types::SliceReader\">SliceReader</a>&lt;'storage&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">IoRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">IoRead</a> for <a class=\"struct\" href=\"bincode/read_types/struct.IoReadReader.html\" title=\"struct bincode::read_types::IoReadReader\">IoReadReader</a>&lt;R&gt;",];
implementors["chrono"] = [];
implementors["core_foundation"] = [];
implementors["flate2"] = ["impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/struct.CrcReader.html\" title=\"struct flate2::CrcReader\">CrcReader</a>&lt;R&gt;","impl&lt;W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.DeflateEncoder.html\" title=\"struct flate2::write::DeflateEncoder\">EncoderWriter</a>&lt;W&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.DeflateEncoder.html\" title=\"struct flate2::read::DeflateEncoder\">EncoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.DeflateEncoder.html\" title=\"struct flate2::bufread::DeflateEncoder\">EncoderReaderBuf</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.DeflateDecoder.html\" title=\"struct flate2::read::DeflateDecoder\">DecoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.DeflateDecoder.html\" title=\"struct flate2::bufread::DeflateDecoder\">DecoderReaderBuf</a>&lt;R&gt;","impl&lt;W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.DeflateDecoder.html\" title=\"struct flate2::write::DeflateDecoder\">DecoderWriter</a>&lt;W&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.GzEncoder.html\" title=\"struct flate2::write::GzEncoder\">EncoderWriter</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.GzEncoder.html\" title=\"struct flate2::read::GzEncoder\">EncoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.GzEncoder.html\" title=\"struct flate2::bufread::GzEncoder\">EncoderReaderBuf</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.GzDecoder.html\" title=\"struct flate2::read::GzDecoder\">DecoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.MultiGzDecoder.html\" title=\"struct flate2::read::MultiGzDecoder\">MultiDecoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.GzDecoder.html\" title=\"struct flate2::bufread::GzDecoder\">DecoderReaderBuf</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.MultiGzDecoder.html\" title=\"struct flate2::bufread::MultiGzDecoder\">MultiDecoderReaderBuf</a>&lt;R&gt;","impl&lt;W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.ZlibEncoder.html\" title=\"struct flate2::write::ZlibEncoder\">EncoderWriter</a>&lt;W&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.ZlibEncoder.html\" title=\"struct flate2::read::ZlibEncoder\">EncoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.ZlibEncoder.html\" title=\"struct flate2::bufread::ZlibEncoder\">EncoderReaderBuf</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/read/struct.ZlibDecoder.html\" title=\"struct flate2::read::ZlibDecoder\">DecoderReader</a>&lt;R&gt;","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/bufread/struct.ZlibDecoder.html\" title=\"struct flate2::bufread::ZlibDecoder\">DecoderReaderBuf</a>&lt;R&gt;","impl&lt;W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"flate2/write/struct.ZlibDecoder.html\" title=\"struct flate2::write::ZlibDecoder\">DecoderWriter</a>&lt;W&gt;",];
implementors["hyper"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"hyper/net/trait.NetworkStream.html\" title=\"trait hyper::net::NetworkStream\">NetworkStream</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"hyper/client/pool/struct.PooledStream.html\" title=\"struct hyper::client::pool::PooledStream\">PooledStream</a>&lt;S&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"hyper/client/response/struct.Response.html\" title=\"struct hyper::client::response::Response\">Response</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"hyper/client/enum.Body.html\" title=\"enum hyper::client::Body\">Body</a>&lt;'a&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"hyper/http/h1/struct.Http11Message.html\" title=\"struct hyper::http::h1::Http11Message\">Http11Message</a>","impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"hyper/http/h1/enum.HttpReader.html\" title=\"enum hyper::http::h1::HttpReader\">HttpReader</a>&lt;R&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"hyper/net/struct.HttpStream.html\" title=\"struct hyper::net::HttpStream\">HttpStream</a>","impl&lt;S:&nbsp;<a class=\"trait\" href=\"hyper/net/trait.NetworkStream.html\" title=\"trait hyper::net::NetworkStream\">NetworkStream</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"hyper/net/enum.HttpsStream.html\" title=\"enum hyper::net::HttpsStream\">HttpsStream</a>&lt;S&gt;","impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"hyper/server/request/struct.Request.html\" title=\"struct hyper::server::request::Request\">Request</a>&lt;'a, 'b&gt;",];
implementors["hyper_native_tls"] = ["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"hyper_native_tls/struct.TlsStream.html\" title=\"struct hyper_native_tls::TlsStream\">TlsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a></span>",];
implementors["libc"] = [];
implementors["native_tls"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"native_tls/struct.TlsStream.html\" title=\"struct native_tls::TlsStream\">TlsStream</a>&lt;S&gt;",];
implementors["num"] = [];
implementors["security_framework"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"security_framework/secure_transport/struct.SslStream.html\" title=\"struct security_framework::secure_transport::SslStream\">SslStream</a>&lt;S&gt;",];
implementors["serde"] = [];
implementors["syn"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
