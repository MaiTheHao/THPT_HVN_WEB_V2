import React from "react";

function Document({ document }) {
	const testUrl = "https://www.hindipanda.com/wp-content/uploads/2021/09/dedicated-servers-min-min.jpeg";
	return (
		<li className="document">
			<div className="document-picture">
				<img alt="document alt" src={document?.picture || testUrl}></img>
			</div>
			<div className="document-intro scrollY">
				<h5 className="documentTitle">{document?.title}</h5>
				<p className="documentDiscrip">{document?.description}</p>
			</div>
			<div className="document-meta">
				<div className="meta1">
					<span className="documentAuthor mte">Tác giả: {document?.author}</span>
					<div></div>
					<span className="documentBirth mte">Ngày tạo: {document?.birth}</span>
				</div>
				<div className="meta2">
					<span className="documentType mte">Thể loại: {document?.type}</span>
					<div></div>
					<div className="documentAction mte">
						<button className="documentDownload">Tải về</button>
						<button className="documentMore">Xem thêm</button>
					</div>
				</div>
			</div>
		</li>
	);
}

export default Document;
