//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

contract DeBlog {
    event BlogAdded(
        uint256 blogId,
        address owner,
        string blogTitle,
        string coverImage,
        string blogCategory,
        string blogContent,
        uint blogUploaded
    );

    struct Blog {
        uint256 blogId;
        address blogOwner;
        string blogTitle;
        string coverImage;
        string blogCategory;
        string blogContent;
        uint256 timestamp;
    }

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    Blog[] blogs;

    function getAllblogs() public view returns (Blog[] memory) {
        return blogs;
    }

    function newBlog(
        uint256 blogId_,
        string memory blogTitle_,
        string memory coverImage_,
        string memory blogCategory_,
        string memory blogContent_
    ) public payable {
        blogs.push(
            Blog(
                blogId_,
                payable(msg.sender),
                blogTitle_,
                coverImage_,
                blogCategory_,
                blogContent_,
                block.timestamp
            )
        );

        emit BlogAdded(
            blogId_,
            msg.sender,
            blogTitle_,
            coverImage_,
            blogCategory_,
            blogContent_,
            block.timestamp
        );
    }

    function tipToOwner(address payable blogOwner_) public payable {
        blogOwner_.transfer(msg.value);
    }
}
